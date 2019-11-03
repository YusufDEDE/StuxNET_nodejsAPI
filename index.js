const express = require('express')
const bodyParser = require("body-parser");
const account = require('./router/accounts');
const auth = require('./router/auth');
const customers = require('./router/customers');
const payment = require('./router/payment');
const port = process.env.PORT||3000
var cors = require('cors');
const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
const verifyToken=require('./middleware/verifyToken');

//jwtConfig
const jwtConfig=require('./config/jwtConfig');
app.set('api_key',jwtConfig.api_key);



app.use('/',auth);
app.use('/api/',verifyToken) 
app.use('/api/customer',customers);
app.use('/api/account',account);
app.use('/api/payment',payment);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})