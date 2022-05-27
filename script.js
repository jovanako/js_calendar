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
const dayOfMonth = date.getDate()

// Div containing
// - title (name of current month)
// - buttons for the previous and next month
const body = document.body

const titleWrapper = document.createElement('div')
titleWrapper.id = "title-wrapper"
body.append(titleWrapper)

const previous = appendTitleWrapperButton("Previous")

let nameOfCurrentMonth = MONTH_NAMES[currentMonth]

let monthTitle = document.createElement('h1')
monthTitle.innerText = nameOfCurrentMonth
titleWrapper.append(monthTitle)

const next = appendTitleWrapperButton("Next")

// Div containing table cells with the days in the current month

const calendarWrapper = document.createElement('div')
calendarWrapper.id = "wrapper"
body.append(calendarWrapper)

// creates table cells and populates them with numbers representing each day in the month

function renderMonth(month, year) {
  let counter = 1
  const daysInMonth = getDaysInMonth(year, month)

  for (let i = 0; i < daysInMonth; i++) {
    let cell = document.createElement('div')
    cell.className = "cell"
    cell.id = `date${counter}`
    cell.innerText = counter++
    wrapper.append(cell)
  }
}


// if (counter === dayOfMonth) {
//   cell.id = "current-day"
// }


// creates click event for previous button

let renderedMonth = currentMonth
let renderedYear = date.getFullYear()
renderMonth(renderedMonth, renderedYear)

function getPreviousMonth() {

}

previous.addEventListener('click', getPreviousMonth)