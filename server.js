const express = require('express')
const app = express()

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Doccords' })
})

app.get('/doccords', (req, res) => {
  res.status(200).json({ message: 'Second' })
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is listening on Port:${process.env.PORT}`)
})
