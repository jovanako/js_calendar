import { quoteWrapper } from './quote.mjs'
import { titleWrapper, weekDays, datesWrapper } from './monthControl.mjs'

document.body.append(quoteWrapper, titleWrapper, weekDays, datesWrapper)