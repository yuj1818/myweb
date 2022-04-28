const express = require('express')
const app = express()
const port = 3000   //포트번호

app.get('/', (req, res) => {
  res.send('Hello World!')  //출력할 것
})

app.get('/about', (req, res) => {
  res.send('<h1>반가워요</h>')  //출력할 것
})

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html')  //출력할 것
})

app.get('/main', (req, res) => {
  res.sendFile(__dirname + '/main.html')  //출력할 것
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
