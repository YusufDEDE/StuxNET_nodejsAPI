const express = require('express')
const bodyParser = require("body-parser");
const account = require('./router/accounts');
const auth = require('./router/auth');
const customers = require('./router/customers');
const port = process.env.PORT||3000
var cors = require('cors');
const app = express()
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
//const isAuthenticated=require('./middleware/isAuthenticated');
const verifyToken=require('./middleware/verifyToken');

//jwtConfig
const jwtConfig=require('./config/jwtConfig');
app.set('api_key',jwtConfig.api_key);



app.use('/',auth);  //login register kısımları
app.use('/api/',verifyToken) //gelen token ayrıştırma
app.use('/customer',customers); //müşteri işlemleri (bilgi güncelleme, aktiflik kapatma)
app.use('/account',account); //hesap işlemleri( hesap açma, para çekme/yükleme, listeleme, silme)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})