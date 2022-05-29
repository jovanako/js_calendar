const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const DAY_NAMES = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

/**
 * @param {number} year 
 * @param {number} month
 * @returns number of days in the given month, for the given year
 */
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function appendTitleWrapperButton(innerText) {
  const button = document.createElement('button')
  button.innerText = innerText
  button.className = "button"
  titleWrapper.append(button)
  return button
}

const date = new Date()
const currentMonth = date.getMonth()
const currentYear = date.getFullYear()
const dayOfMonth = date.getDate()

// Div containing
// - title (name of current year)
// - title (name of current month)
// - buttons for the previous and next month
const body = document.body

const titleWrapper = document.createElement('div')
titleWrapper.id = "title-wrapper"
body.append(titleWrapper)

const previous = appendTitleWrapperButton("<")

let nameOfCurrentMonth = MONTH_NAMES[currentMonth]

let title = document.createElement('h1')
titleWrapper.append(title)

const next = appendTitleWrapperButton(">")

// Div containing days of week

const weekDays = document.createElement('div')
weekDays.id = "week-days"
body.append(weekDays)

for (let i = 0; i < DAY_NAMES.length; i++) {
  let weekDayCell = document.createElement('div')
  weekDayCell.className = "cell"
  weekDayCell.innerText = DAY_NAMES[i]
  weekDays.append(weekDayCell)
}

// Div containing table cells with the days in the current month

const calendarWrapper = document.createElement('div')
calendarWrapper.id = "wrapper"
body.append(calendarWrapper)

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// creates table cells and populates them with numbers representing each day in the month

function renderMonth(month, year) {
  removeAllChildNodes(calendarWrapper)
  let counter = 1
  const daysInMonth = getDaysInMonth(year, month)
  const checkDay = new Date(year, month)
  let firstWeekDayInMonth = checkDay.getDay() + 1

  for (let i = 0; i < daysInMonth; i++) {
    let cell = document.createElement('div')
    cell.className = "cell"
    calendarWrapper.append(cell)
    cell.innerText = counter

    if (cell.innerText === "1") {
      cell.id = "date1"
    }

    document.getElementById("date1").style.gridColumnStart = firstWeekDayInMonth

    if (counter === dayOfMonth
      && month === date.getMonth()
      && year === date.getFullYear()) {
      cell.id = "current-day"
    }
    counter++
  }
  title.innerText = `${MONTH_NAMES[month]} ${year}`
}

let renderedMonth = currentMonth
let renderedYear = currentYear
renderMonth(renderedMonth, renderedYear)

// creates click event for previous button

function getPreviousMonth() {
  renderedMonth--
  if (renderedMonth === -1) {
    renderedMonth = 11
    renderedYear--
  }
  renderMonth(renderedMonth, renderedYear)
}

previous.addEventListener('click', getPreviousMonth)

// creates click event for next button

function getNextMonth() {
  renderedMonth++
  if (renderedMonth === 12) {
    renderedMonth = 0
    renderedYear++
  }
  renderMonth(renderedMonth, renderedYear)
}

next.addEventListener('click', getNextMonth)