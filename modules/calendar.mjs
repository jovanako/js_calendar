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

/**
 * 
 * @param {string} elemType - tag of the newly-created element
 * @param {object} parent - element to append the newly-created element to
 * @param {object} opts - optional object with keys: elemId, className, innerText
 * @returns newly-created element
 */

const weekDays = document.createElement('div')
weekDays.id = 'week-days'

for (let i = 0; i < DAY_NAMES.length; i++) {
  const weekDay = document.createElement('div')
  weekDay.className = 'cell'
  weekDay.innerText = DAY_NAMES[i]
  weekDays.append(weekDay)
}

// div containing table cells with days of current month
const datesWrapper = document.createElement('div')
datesWrapper.id = 'dates-wrapper'

// function that clears the html before rendering new page
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// create table cells and populates them with numbers representing each day in the month
function renderMonth(month, year) {
  const currentDate = new Date()
  const daysInMonth = getDaysInMonth(year, month)

  // check what week day is the first day in current month
  const checkDay = new Date(year, month)
  let firstWeekDayInMonth = checkDay.getDay()

  // assign index to the first day in current month 
  // so that the week starts from Monday
  firstWeekDayInMonth = firstWeekDayInMonth === 0 ? 7 : firstWeekDayInMonth

  removeAllChildNodes(datesWrapper)
  // populate the month days cells
  let counter = 1
  for (let i = 0; i < daysInMonth; i++) {
    let cell = document.createElement('div')
    cell.className = 'cell'
    cell.title = 'Add event'
    cell.innerText = counter
    cell.addEventListener("click", addNote)
    datesWrapper.append(cell)


    // change style of the grid so that the cell representing 
    // the first day in current month is located at the appropriate
    // location corresponding to the first week day of current month
    if (counter === 1) {
      cell.style.gridColumnStart = firstWeekDayInMonth
    }

    // add an id to the cell representing current day
    // in order to highlight it in css

    if (counter === currentDate.getDate()
      && month === currentDate.getMonth()
      && year === currentDate.getFullYear()) {
      cell.id = "current-day"
    }
    counter++
  }
}


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

export { renderMonth, weekDays, datesWrapper }
