const body = document.body

// creates a function that calculates number of days in the current month

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}

// creates variables holding the values of 
// - current year
// - current month
// - number of days in current month

const date = new Date()
const currentYear = date.getFullYear()
const currentMonth = date.getMonth() + 1
const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth)

// creates a div containing the title (name of current month), and the buttons for the previous and next month

const titleWrapper = document.createElement('div')
titleWrapper.id = "title-wrapper"
body.append(titleWrapper)

const previous = document.createElement('button')
previous.innerText = "Previous"
previous.className = "button"
previous.id = "previous-button"
titleWrapper.append(previous)

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let nameOfCurrentMonth = monthNames[currentMonth - 1]

let monthTitle = document.createElement('h1')
monthTitle.innerText = nameOfCurrentMonth
titleWrapper.append(monthTitle)

const next = document.createElement('button')
next.innerText = "Next"
next.className = "button"
next.id = "next-button"
titleWrapper.append(next)

// creates a div containing table cells with the days in the current month

const calendarWrapper = document.createElement('div')
calendarWrapper.id = "wrapper"
body.append(calendarWrapper)

// creates a variable representing the current date

const currentDay = new Date();
const dayOfMonth = currentDay.getUTCDate();

// creates table cells and populates them with numbers representing days in the month

let counter = 1

for (let i = 0; i < daysInCurrentMonth; i++) {
  let cell = document.createElement('div')
  cell.className = "cell"
  cell.innerText = counter
  if (counter === dayOfMonth) {
    cell.id = "current-day"
  }
  counter++
  wrapper.append(cell)
}