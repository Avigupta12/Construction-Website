const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
var cors = require('cors')
const mongoDB = require('./db');
mongoDB();

app.use(cors())


app.use(express.json());    
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.get('/',(req,res)=>{
    res.send('Hello World');
})

    

app.listen(port,()=>{
    console.log(`App is listing to port ${port}`);
    
})