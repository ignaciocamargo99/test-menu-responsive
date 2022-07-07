export const parseFormatDate = (date: Date): string => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const fullYear = date.getFullYear()

  const formattedDate = `${fullYear}-${month}-${day}`
  return formattedDate
}
