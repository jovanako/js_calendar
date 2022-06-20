import { quoteWrapper } from './quote.mjs'
import { titleWrapper } from './monthControl.mjs'
import { weekDays } from './weekDays.mjs'
import { datesWrapper } from './calendar.mjs'

document.body.append(quoteWrapper, titleWrapper, weekDays, datesWrapper)