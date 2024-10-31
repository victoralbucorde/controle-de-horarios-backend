const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/', (req,res) => {
    res.status(201).send()
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})