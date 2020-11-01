const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "public")))
app.set('views', __dirname + '/public/views')
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)


app.get('/', (req, res) => {
    res.render('index.html')
})

app.post('/', (req, res) => {
    res.send('hello from post req.')
})

app.listen(8080, () => {
    console.log('Server on port 8080')
})