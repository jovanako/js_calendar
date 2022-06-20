const DAY_NAMES = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
]

const weekDays = document.createElement('div')
weekDays.id = 'week-days'

for (let i = 0; i < DAY_NAMES.length; i++) {
  const weekDay = document.createElement('div')
  weekDay.className = 'cell'
  weekDay.innerText = DAY_NAMES[i]
  weekDays.append(weekDay)
}

export { weekDays }