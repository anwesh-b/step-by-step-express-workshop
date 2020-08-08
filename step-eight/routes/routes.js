const Router = require('express').Router()
const r = require('request')
 
// Define default route to Router
Router.get('/', (req, res) => {
    res.send('Hello from XKCD-serv! 👋')
})
  
// Define API to Router
Router.get('/comic', (req, res) => {
    if (req.query.id) {
        r(`https://xkcd.com/${req.query.id}/info.0.json`, (error, response, body) => {
            if (error) errorHandler()

            console.log(`Response from XKCD website when calling https://xkcd.com/${req.query.id}/info.0.json: ${response} ${response.statusCode}`)

            const bodyToJson = JSON.parse(body)
            const dataToRender = {
                'title': bodyToJson.safe_title,
                'img': bodyToJson.img,
                'desc': bodyToJson.alt
            }
            res.render('comic', dataToRender)
        })
    } else {
        res.send('Find a comic by adding a querystring to the current page. For example: tierneyxkcd.azurewebsites.net/comic?id=112/')
    }
})

//Export the routes
module.exports = Router