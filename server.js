const express = require('express')
const app = express()

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Doccords' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on Port:${process.env.PORT}`)
})
