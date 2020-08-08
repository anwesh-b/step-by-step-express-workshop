const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT ? process.env.PORT : 8080
const host = process.env.DOCKER_HOST ? process.env.DOCKER_HOST : '0.0.0.0'


// Define rendering engine + static directory
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(express.static('static'))

// Define Error Handler
const errorHandler = (err, req, res, next) => {
  res.status(500)
  res.render('error', { error: err })
}

app.use(errorHandler)


// Define Routes
const routes = require('./routes/routes')

app.use('/',routes);


app.listen(port, host, () => console.log(`Our app is now listening at ${host}:${port}!`))
