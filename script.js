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

let monthTitle = document.createElement('h1')
monthTitle.innerText = nameOfCurrentMonth
body.append(monthTitle)

const calendarWrapper = document.createElement('div')
calendarWrapper.id = "wrapper"
body.append(calendarWrapper)

let counter = 1

for (let i = 0; i < daysInCurrentMonth; i++) {
  let cell = document.createElement('div')
  cell.className = "cell"
  cell.innerText = counter++
  wrapper.append(cell)
}

