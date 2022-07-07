import React, { useState } from 'react'
import Container from './Container'
import SingleSelection from '../common/SingleSelection'
import Label from '../common/Label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faArrowRight, faArrowLeft, faFileExcel } from '@fortawesome/free-solid-svg-icons'

const XLSX = require('xlsx')

const DataTable = ({ columns, rows }) => {
  const [quantity, setQuantity] = useState(10)
  const [page, setPage] = useState(1)
  const [columnSort, setColumnSort] = useState(null)
  const [sortUp, setSortUp] = useState(true)

  const sortByColumn = (a, b) => {
    if (a[columnSort] > b[columnSort]) {
      return sortUp ? 1 : -1
    }
    if (a[columnSort] < b[columnSort]) {
      return sortUp ? -1 : 1
    }
    return 0
  }

  const handleChangeSort = (columnName) => {
    if (columnSort === columnName) {
      setSortUp(!sortUp)
    } else {
      setColumnSort(columnName)
      setSortUp(true)
    }
  }

  const setQuantityPage = ({ target }) => {
    setPage(1)
    setQuantity(target.value)
  }

  const buildArrayData = () => {
    const titles = []
    columns.forEach(({ name }) => titles.push(name))
    const arrayData = [titles]
    rows.forEach((object) => {
      arrayData.push([...Object.values(object)])
    })
    return arrayData
  }

  const exportToExcelFile = () => {
    const array = buildArrayData()
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.aoa_to_sheet(array)
    XLSX.utils.book_append_sheet(wb, ws, `Reporte de -${new Date().getMonth()}`)
    XLSX.writeFile(wb, `Reporte de -${new Date().getMonth()}.xlsx`)
  }

  return (
    <Container className="table-responsive">
      <Container className="col-md-1 offset-md-11">
        <button className="btn btn-success" onClick={exportToExcelFile}>
          Exportar a excel &nbsp;
          <FontAwesomeIcon icon={faFileExcel} />
        </button>
      </Container>
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, i) => {
              return (
                <th key={column.name} style={{ width: column.width }}>
                  <label style={columnSort === Object.keys(rows[0])[i] ? { color: 'gray' } : {}}>{column.name}</label>
                  <a
                    className="btn"
                    onClick={() => {
                      handleChangeSort(Object.keys(rows[0])[i])
                    }}
                  >
                    <FontAwesomeIcon icon={faSort} />
                  </a>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows
            .sort(sortByColumn)
            .slice((page - 1) * quantity, page * quantity)
            .map((row, i) => {
              return (
                <tr key={i}>
                  {Object.values(row).map((value, j) => {
                    return <td key={j}>{value}</td>
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
      <Container className="d-flex justify-content-end">
        <SingleSelection
          name="quantity"
          idProperty="number"
          valueProperty="number"
          placeholder="10"
          options={[{ number: 10 }, { number: 25 }, { number: 50 }]}
          onChange={setQuantityPage}
          error=""
        />
        <button
          className="btn"
          onClick={() => {
            setPage(page - 1)
          }}
          disabled={(page - 1) * quantity < 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <Label>
          {page} al {parseInt((rows.length - 1) / quantity) + 1}
        </Label>
        <button
          className="btn"
          onClick={() => {
            setPage(page + 1)
          }}
          disabled={page * quantity >= rows.length}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Container>
    </Container>
  )
}

export default DataTable
