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
            .input('area', mssql.Int, data.area)
            .execute('SP_payment')
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports.listofPaymentTransactions = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .execute('SP_list_of_payment_transactions')
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports.popupPaymentTransactions = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('transID', mssql.Int, data.transID)
            .execute('SP_popup_payment_transaction')
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}