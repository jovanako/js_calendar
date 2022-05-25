const body = document.body

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}

const date = new Date()
const currentYear = date.getFullYear()
const currentMonth = date.getMonth() + 1
const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth)

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let nameOfCurrentMonth = monthNames[currentMonth - 1]

const table = document.createElement('table')
body.append(table)

let caption = document.createElement('caption')
caption.innerText = nameOfCurrentMonth
table.append(caption)

let counter = 1

for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr')
  table.append(tr)

  for (let j = 0; j < 7; j++) {
    let td = document.createElement('td')
    td.innerText = counter++
    tr.append(td)
  }


}

