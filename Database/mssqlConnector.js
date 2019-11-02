const sql = require('mssql')
var pool = null;

const config =
{
    "user": 'stuxnet', //değiştir
    "password": 'stuxnet258456', //değiştir
    "server": '35.223.139.123', //localhost
    "database": 'dbBankApp', 
    "port": 1433,    //1433
    "dialect": "mssql",
    /*"dialectOptions": {
        "instanceName": "DESKTOP-INCJ5DT" //serverName
    }*/
};

module.exports.getConnection = async () => { //singleton
    try {
        if (pool) {
            console.log('db connected');
            return pool
        }
        sql.Int
        pool = await sql.connect(config);
        console.log('new db connected');
        return pool
    } catch (err) {
        pool = null
        console.log(err)
    }
}

module.exports.stopConnection = async () => {
    try {
        pool.close()
        pool = null;
    } catch (err) {
        console.log(err)
        pool = null;
    }
}


sql.on('error', err => {
    // ... error handler
    console.log(err)
})
