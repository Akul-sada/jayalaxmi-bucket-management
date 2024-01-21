const express = require("express");
const morgan = require('morgan');
const app = express();
const userRouter = require('./routes/userRoutes');
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use('/api/v1/users', userRouter);
app.listen(5000,()=>{
    console.log("server started on port 5000");
});