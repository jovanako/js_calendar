const QUOTES_API = "https://uselessfacts.jsph.pl/random.json?language=en"

const quoteWrapper = document.createElement('div')
quoteWrapper.id = 'quote-wrapper'

const didYouKnow = document.createElement('p')
didYouKnow.innerText = 'Did you know?'
quoteWrapper.append(didYouKnow)

const quote = document.createElement('p')
quote.innerText = '...'
quoteWrapper.append(quote)

const handleError = error => {
  quoteWrapper.removeChild(didYouKnow)
  quoteWrapper.removeChild(quote)
  console.log(error)
}

fetch(QUOTES_API)
  .then(response => response.json())
  .then(json => quote.innerText = json.text.toUpperCase())
  .catch(handleError)

export { quoteWrapper }