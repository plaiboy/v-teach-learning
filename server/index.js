const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const conectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');

dotenv.config();

connectDB();

const app = express();

app.use(expressjson());
app.use(morgan('dev'));
app.use(cors());

app.use('/ap/v1/user', require('./Routes/userRoute'));
app.use('/api/v1/admin', require('./Routes/adminRoute'));

const port =  process.env.PORT || 5300;

app.listen(port, () =>{
    console.log(colors.bgCyan.white(`app is unning a ${port}`))
})
