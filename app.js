//require packages and set up variables
const express   = require("express"),
      request   = require('request'),
      app       = express(),
      PORT      = process.env.PORT || 3000

//use the 'public' directory
app.use(express.static('public'))

//home route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

//listen on port
app.listen(PORT, function(){
    console.log("Converter Server has started!");
})

