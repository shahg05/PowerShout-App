const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello from get req.')
})

app.post('/', (req, res) => {
    res.send('hello from post req.')
})

app.listen(8080, () => {
    console.log('Server on port 8080')
})