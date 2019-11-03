const sql = require("../mssqlConnector");
const mssql = require('mssql');

module.exports.payment = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('accNo', mssql.BigInt, data.accNo)
            .input('additNo', mssql.Int, data.additNo)
            .input('billID', mssql.Int, data.billID)
            .input('pay',mssql.Money, data.pay)
            .execute('SP_payment')
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}