import { quoteWrapper } from './quote.mjs'
import { titleWrapper, datesWrapper } from './monthControl.mjs'
import { weekDays } from './weekDays.mjs'

document.body.append(quoteWrapper, titleWrapper, weekDays, datesWrapper)