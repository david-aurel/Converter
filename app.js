const express   = require("express"),
      app       = express(),
      PORT      = process.env.PORT || 3000 

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, function(){
    console.log("Converter Server has started!");
})