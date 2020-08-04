const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:users1@ds145659.mlab.com:45659/heroku_qkwc3181";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
});

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT,() => console.log(`App listening on Port ${PORT}`));