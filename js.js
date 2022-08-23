const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const request = require("request");
app.use(express.static("public"));
// all css files images pdf  are static
//use above code to access them
app.get("/", function(req,res)
{ res.sendFile(__dirname+"/html.html");


  console.log("file send successfully");
}
);
app.get("/about", function(req,res) {
  console.log("about page is send successfully");
});



app.listen(3000, function(){
  console.log("port working on port 3000");
}

);
