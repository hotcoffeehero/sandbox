const express = require('express')
const app = express()

app.use((req, res, next) => {
  let body = ''
  req.on('end', () => {
    const userName = body.split('=')[1]
    if (userName) {
      req.body = { name: userName }
    }
    next()
  })
  req.on('data', (chunk) => {
    body += chunk
  })
})

app.use((req, res, next) => {
  if (req.body) {
    return res.send('<h1>' + req.body.name + '</h1>')
  }
  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit">CREATE USER</button></form>'
  )
})

app.listen(5000, console.log('Go on 5000!'))

// const http = require('http')

// const server = http.createServer((req, res) => {
//   console.log('Incoming Request!')
//   console.log(req.method, req.url)

//   if (req.method === 'POST') {
//     let body = ''
//     req.on('end', () => {
//       const username = body.split('=')[1]
//       res.end('<h1>' + username + '</h1>')
//     })
//     req.on('data', (chunk) => {
//       body += chunk
//     })
//   } else {
//     res.setHeader('Content-Type', 'text/html')
//     res.end(
//       '<form method="POST"><input type="text" name="username"><button type="submit">CREATE USER</button></form>'
//     )
//   }
// })

// server.listen(5000)
