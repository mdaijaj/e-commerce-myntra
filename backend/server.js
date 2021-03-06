const express = require('express')
// const cors = require('cors');
// const bodyParser=require('body-parser');
const cookieParser= require('cookie-parser')
const connectedb=require('./database/db')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(cookieParser());
// app.use(express.static(__dirname)); 

let router=require('./routes/index')
app.use('/', router)

// let orderRoutes=require('./routes/order_routes')
// app.use('/', orderRoutes)


const port=5000;
app.listen(port, ()=>{
    console.log("api is working", port)
})
