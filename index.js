const express = require('express')
var morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

// route  tuyen duong // dinh nghia tuyen duong
app.get('/', (req, res) => {
  return res.send(`
    <h1 style="color:red;">Hello World!</h1>
    `);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
