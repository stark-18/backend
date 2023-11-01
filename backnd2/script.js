const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World man')
})
app.get('/profile', function (req, res) {
    res.send('Hello for profile')
  })
app.get('/profile/:username', function (req, res) {
    res.send(`Hello from ${req.params.username}`)
  })
  

app.listen(3000)