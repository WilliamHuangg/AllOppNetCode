const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
const books = require("google-books-search")

const server = express()

server.use(logger('dev'))

server.set('view engine', 'ejs') //allows use to use ejs
server.use(express.static('view')) //sets express up to serve static files. ie:css img
server.set('views', __dirname +'/public')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false}))

//server response
server.get('/', (request, response) => {
    response.render('home.ejs')
})

server.post("/results", (request,response) => {
    console.log(request.body)
    
    books.search(request.body.search, function(error, results) {
        if ( ! error ) {
            console.log(results);
            response.render("results.ejs", {data: results})
        } else {
            console.log(error);
            response.render("results.ejs", {data: error})
        }
});
    
})

const port = process.env.PORT

server.listen(port, function(){
    console.log('server running on port' + port)
})