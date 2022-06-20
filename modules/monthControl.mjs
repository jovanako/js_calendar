import { renderMonth, datesWrapper } from "./calendar.mjs"

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

const date = new Date()
let renderedMonth = date.getMonth()
let renderedYear = date.getFullYear()

function getPreviousMonth() {
  renderedMonth--
  if (renderedMonth === -1) {
    renderedMonth = 11
    renderedYear--
  }
  title.innerText = `${MONTH_NAMES[renderedMonth]} ${renderedYear}`
  renderMonth(renderedMonth, renderedYear)
}

function getNextMonth() {
  renderedMonth++
  if (renderedMonth === 12) {
    renderedMonth = 0
    renderedYear++
  }
  title.innerText = `${MONTH_NAMES[renderedMonth]} ${renderedYear}`
  renderMonth(renderedMonth, renderedYear)
}

const titleWrapper = document.createElement('div')
titleWrapper.id = 'title-wrapper'

const previous = document.createElement('button')
previous.className = 'button'
previous.innerText = '<'
previous.addEventListener('click', getPreviousMonth)
titleWrapper.append(previous)

const title = document.createElement('h1')
// populate title with current month and year
title.innerText = `${MONTH_NAMES[renderedMonth]} ${renderedYear}`
titleWrapper.append(title)

const next = document.createElement('button')
next.className = 'button'
next.innerText = '>'
next.addEventListener('click', getNextMonth)
titleWrapper.append(next)

renderMonth(renderedMonth, renderedYear)

export { titleWrapper, datesWrapper }