# What have we done in this step

In this step, we're seperating Routing to new file from `app.js` make our main file easy to read. For this, we will create new folder `routes` folder and `routes.js` file inside it. 

Now we are going to define routes for different endpoint in our new file. We can achieve this by Express.Router. The `.get()` method takes two paramter like Express's `.get()` method which takes two arguments – a path and a callback function. And finally we need to export the Router

```
const Router = require('express').Router()

Router.get(<path argument>, <callback function> {
  // this is where we are able to define what we want to do when someone navigates to this path
  response.send(<what we want to send back to the client>)
})

module.exports = Router
```

Now, lets achieve this for the `/` path that we had defined previously.

```
Router.get('/', (req, res) => {
    res.send('Hello from XKCD-serv! 👋')
})
```

Now we define `/comic` route as well and also we need to define the `request` module in the route file.
```
const r = require('request')
```

Now we have defined the routes, we need to specify it in our `app.js`. We can do it by specifying the path of `router.js` file `(./routes/routes)` into a variable. And we can use the file to serve all the routes starting with `/`.

```
const routes = require('./routes/routes')
app.use('/',routes)
```


# Steps

- Create new file `routes/routes.js`
- Add routes
- Export the routes 
- Specify the routes file in `app.js`