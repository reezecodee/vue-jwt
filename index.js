const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/index')

const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api', router)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})