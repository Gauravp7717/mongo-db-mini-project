const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.text())


app.use(cors({
    origin: '*'
}));

const userRouter = require("./routes/register.routes");

app.use('/user',userRouter);



app.get('/',(req,res) => {
    res.json({hello:"skj"}) 
})

mongoose.connect("mongodb+srv://gp131028:JM95paelM8Gx9SCq@cluster1.oakcrcy.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected to mongodbserver");
    app.listen(process.env.PORT, () => {
        console.log(`listening to port ${PORT},By and name is ${PORT}`);
    })
}).catch(error => {
    console.log("something went wrong with mongodb server", error);
});




module.exports = app;