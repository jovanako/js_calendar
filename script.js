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

/**
 * 
 * @param {string} elemType - tag of the newly-created element
 * @param {object} parent - element to append the newly-created element to
 * @param {object} opts - optional object with keys: elemId, className, innerText
 * @returns newly-created element
 */
function appendNewElem(elemType, parent, opts) {
  const { elemId, className, innerText, title } = opts || {}
  let elem = document.createElement(elemType)
  elem.id = elemId || ''
  elem.className = className || ''
  elem.innerText = innerText || ''
  elem.title = title || ''
  parent.append(elem)
  return elem
}

// add div containing quote
const quoteWrapper = appendNewElem('div', body, { elemId: "quote-wrapper" })

// Div containing
// - title (name of current year and month)
// - buttons for the previous and next month
const titleWrapper = appendNewElem('div', body, { elemId: "title-wrapper" })

// add "previous" button
const previous = appendNewElem('button', titleWrapper, {
  className: "button",
  innerText: "<"
})

// create h1 element for the title
let title = appendNewElem('h1', titleWrapper)

// add "next" button
const next = appendNewElem('button', titleWrapper, {
  className: "button",
  innerText: ">"
})

// div containing days of week
const weekDays = appendNewElem('div', body, { elemId: "week-days" })

// populate week days
for (let i = 0; i < DAY_NAMES.length; i++) {
  appendNewElem('div', weekDays, {
    className: "cell",
    innerText: DAY_NAMES[i]
  })
}

// div containing table cells with days of current month
const datesWrapper = appendNewElem('div', body, { elemId: "dates-wrapper" })

// function that clears the html before rendering new page
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// create table cells and populates them with numbers representing each day in the month
function renderMonth(month, year) {
  removeAllChildNodes(datesWrapper)
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
    let cell = appendNewElem('div', datesWrapper, {
      className: "cell",
      title: "Add event",
      innerText: counter
    })

    cell.addEventListener("click", addNote)

    // change style of the grid so that the cell representing 
    // the first day in current month is located at the appropriate
    // location corresponding to the first week day of current month
    if (counter === 1) {
      cell.style.gridColumnStart = firstWeekDayInMonth
    }


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
const quotesAPI = "https://asli-fun-fact-api.herokuapp.com/"

function createP(elem) {
  let p = document.createElement('p')
  p.innerText = elem
  quoteWrapper.append(p)
}

fetch(quotesAPI)
  .then(response => response.json())
  .then(json => createP(`Did you know?
  ${json.data.fact.toUpperCase()}`))
  .catch(error => console.log(error))

// create function that adds event on certain day
const noteInputWindow = document.createElement('div')
noteInputWindow.id = "note-window"
datesWrapper.append(noteInputWindow)

const closeButton = document.createElement('span')
closeButton.className = "close"
noteInputWindow.append(closeButton)

const noteInput = document.createElement('input')
noteInput.type = "text"
noteInputWindow.append(noteInput)

function addNote() {
  noteInputWindow.style.display = "flex"
}

