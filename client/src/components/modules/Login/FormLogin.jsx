import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import underConstruction from '../../../images/construction.png'

const FormLogin = () => {
  return (
    <div className="container-fluid col-md-12" style={{ position: 'relative' }}>
      <div className="row mt-4 rounded border border-dark" style={{ background: 'lightgrey' }}>
        <div className="col text-center py-5">
          <img src={underConstruction} />
        </div>
        <div className="col">
          <div className="col my-5 py-5 px-2">
            <h2 className="fw-bold text-center pt-4">Iniciar Sesión</h2>
            <br />
            <form>
              <div className="mb-4">
                <label className="form-label">
                  <FontAwesomeIcon icon={faUser} /> Usuario
                </label>
                <br />
                <input type="text" className="form-control" placeholder="Ingrese su nombre de usuario" />
              </div>
              <div className="mb-4">
                <label className="form-label">
                  <FontAwesomeIcon icon={faLock} /> Contraseña
                </label>
                <br />
                <input type="password" className="form-control" placeholder="Ingrese su contraseña" />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button type="submit" className=" btn btn-primary">
                  <FontAwesomeIcon icon={faRightToBracket} /> Ingresar
                </button>
              </div>
              <br />
              <div className="text-center">
                <a href="#!" className="">
                  Crear Usuario
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormLogin
