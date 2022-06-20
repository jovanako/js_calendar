// create function that adds event on certain day
function addNote(e) {

  const noteInputWindow = document.createElement('div')
  noteInputWindow.id = 'note-window'

  const closeButton = document.createElement('span')
  closeButton.className = 'close'
  closeButton.innerText = 'x'
  closeButton.addEventListener('click', function handleClick() {
    noteInputWindow.remove()
  })

  const noteInput = document.createElement('input')
  noteInput.type = 'text'

  noteInputWindow.append(closeButton)
  noteInputWindow.append(noteInput)
  e.target.append(noteInputWindow)

  noteInputWindow.style.display = 'flex'
}

export { addNote }