import { addNote } from './addNote.mjs'

/**
 * @param {number} year 
 * @param {number} month
 * @returns number of days in the given month, for the given year
 * note: number of days in the current month = the last day of the previous month
 * 'month + 1' gives the next month
 * the day 0 of the next month equals the last day of the previous month
 */
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
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

// create table cells and populate them with numbers for each day in the month
function renderMonth(month, year) {
  const currentDate = new Date()
  const daysInMonth = getDaysInMonth(year, month)

  // check what week day is the first day in current month
  //(Syntax: new Date(year, monthIndex, day) - where the default for 'day' is 1)
  const checkDay = new Date(year, month)
  let firstWeekDayInMonth = checkDay.getDay()

  // assign index to the first day in current month 
  // so that the week starts from Monday
  // by default, the index for Sunday is 0, so I am assigning it the index 7
  // Monday still has the index 1
  firstWeekDayInMonth = firstWeekDayInMonth === 0 ? 7 : firstWeekDayInMonth

  removeAllChildNodes(datesWrapper)
  // populate the date cells
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

export { renderMonth, datesWrapper }
