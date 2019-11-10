const sql = require('mssql')
var pool = null;

const config =
{
    "user": 'stuxnet',
    "password": 'Stux258456',
    "server": 'stuxnet-sql.database.windows.net', 
    "database": 'dbBankApp', 
    "port": 1433, 
    "dialect": "mssql",
};

module.exports.getConnection = async () => {
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
    console.log(err)
})
