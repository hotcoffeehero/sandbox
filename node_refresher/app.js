const fs = require('fs')

const greetings =
  'Hello, my name is Captain ClinTON and I have a hot wife and a huge penis and lots of money and friends and everybody wants to be like me.'

fs.writeFile('user-data.txt', 'Name: ' + greetings, (err) => {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('File Wrrrrritten.')
  }
})
