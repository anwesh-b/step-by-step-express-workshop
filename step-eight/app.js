const express = require('express')
const handlebars = require('express-handlebars')
const r = require('request')
const app = express()
const port = 8080

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(express.static('static'))

const routes = require('./routes/routes')
app.use('/',routes)

app.listen(port, () => console.log(`Our app is now listening on port ${port}!`))
