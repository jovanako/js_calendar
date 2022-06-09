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
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
]

/**
 * @param {number} year 
 * @param {number} month
 * @returns number of days in the given month, for the given year
 */
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

// function that adds a button element
function appendTitleWrapperButton(innerText) {
  const button = document.createElement('button')
  button.innerText = innerText
  button.className = "button"
  titleWrapper.append(button)
  return button
}

// create new Date object
const date = new Date()
// get current month
const currentMonth = date.getMonth()
// get current year
const currentYear = date.getFullYear()
// get current date
const dayOfMonth = date.getDate()

const body = document.body

// function createElem(elemName, elemTag, elemId) {
//   let elemName = document.createElement(elemTag)
//   elemName.id = elemId
//   body.append(elemName)
// }

// Div containing
// - title (name of current year and month)
// - buttons for the previous and next month
const titleWrapper = document.createElement('div')
titleWrapper.id = "title-wrapper"
body.append(titleWrapper)

// add "previous" button
const previous = appendTitleWrapperButton("<")

// create h1 element for the title
let title = document.createElement('h1')
titleWrapper.append(title)

// add "next" button
const next = appendTitleWrapperButton(">")

// add div containing quote
const quoteWrapper = document.createElement('div')
quoteWrapper.id = "quote-wrapper"
body.append(quoteWrapper)

// div containing days of week
const weekDays = document.createElement('div')
weekDays.id = "week-days"
body.append(weekDays)

// populate week days
for (let i = 0; i < DAY_NAMES.length; i++) {
  let weekDayCell = document.createElement('div')
  weekDayCell.className = "cell"
  weekDayCell.innerText = DAY_NAMES[i]
  weekDays.append(weekDayCell)
}

// div containing table cells with days of current month
const calendarWrapper = document.createElement('div')
calendarWrapper.id = "wrapper"
body.append(calendarWrapper)

// function that clears the html before rendering new page
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// create table cells and populates them with numbers representing each day in the month
function renderMonth(month, year) {
  removeAllChildNodes(calendarWrapper)
  let counter = 1
  const daysInMonth = getDaysInMonth(year, month)

  // check what week day is the first day in current month
  const checkDay = new Date(year, month)
  let firstWeekDayInMonth = checkDay.getDay()

  // assign index to the first day in current month 
  // so that the week starts from Monday
  firstWeekDayInMonth = firstWeekDayInMonth === 0 ? 7 : firstWeekDayInMonth

  // populate the month days cells
  for (let i = 0; i < daysInMonth; i++) {
    let cell = document.createElement('div')
    cell.className = "cell"
    cell.title = "Add event"
    calendarWrapper.append(cell)
    cell.innerText = counter

    // add an id to the cell representing the first day in month
    if (cell.innerText === "1") {
      cell.id = "date1"
    }

    // change style of the grid so that the cell representing 
    // the first day in current month is located at the appropriate
    // cell representing the first week day of current month
    document.getElementById("date1").style.gridColumnStart = firstWeekDayInMonth

    // add an id to the cell representing current day
    // in order to highlight it in css
    if (counter === dayOfMonth
      && month === date.getMonth()
      && year === date.getFullYear()) {
      cell.id = "current-day"
    }
    counter++
  }
  // populate title with current month and year
  title.innerText = `${MONTH_NAMES[month]} ${year}`
}

let renderedMonth = currentMonth
let renderedYear = currentYear
renderMonth(renderedMonth, renderedYear)

// create click event for previous button
function getPreviousMonth() {
  renderedMonth--
  if (renderedMonth === -1) {
    renderedMonth = 11
    renderedYear--
  }
  renderMonth(renderedMonth, renderedYear)
}

previous.addEventListener('click', getPreviousMonth)

// create click event for next button
function getNextMonth() {
  renderedMonth++
  if (renderedMonth === 12) {
    renderedMonth = 0
    renderedYear++
  }
  renderMonth(renderedMonth, renderedYear)
}

next.addEventListener('click', getNextMonth)

// add quotes API
const quotesAPI = "https://uselessfacts.jsph.pl/random.json?language=en"

function createP(elem) {
  let p = document.createElement('p')
  p.innerText = elem
  quoteWrapper.append(p)
}

fetch(quotesAPI)
  .then(response => response.json())
  .then(json => createP(json.text))
  .catch(error => console.log(error))

// create function that adds event on certain day
function addEvent() {
  const eventInputWindow = document.createElement('div')
  eventInputWindow.id = "event-window"
  body.append(eventInputWindow)
}

document.querySelector('.cell').addEventListener("click", addEvent())