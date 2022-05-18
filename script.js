const body = document.body

const table = document.createElement('table')
body.append(table)

let counter = 1

for (let i = 0; i < 3; i++) {
  let tr = document.createElement('tr')
  table.append(tr)
  for (let j = 0; j < 3; j++) {
    let td = document.createElement('td')
    td.innerText = counter++
    tr.append(td)
  }
}

