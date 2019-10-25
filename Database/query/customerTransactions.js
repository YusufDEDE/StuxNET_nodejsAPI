const sql = require("../mssqlConnector")
const mssql = require('mssql');

module.exports.findByTC = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .execute('SP_customer_information')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports.RegisterUser = async (data) => {

    const pool = await sql.getConnection();
    try {
        let result1 = await pool.request()
            .input('tcNumber', mssql.BigInt, data.tcNumber)
            .input('pass', mssql.NVarChar, data.pass)
            .input('firstName', mssql.VarChar, data.firstName)
            .input('lastName', mssql.VarChar, data.lastName)
            .input('birthDate', mssql.Date, data.date)
            .input('address', mssql.VarChar, data.address)
            .input('phone', mssql.VarChar, data.phone)
            .input('mail', mssql.VarChar, data.mail)
            .execute('SP_register')
        return { status: 200, message: "success" };
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports.LoginUser = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .input('pw', mssql.NVarChar, data.pw)
            .execute('SP_login')
            console.log("SP_login log => ", result);
            return { status:200, message: "access granted!"};
    } catch (error) {
        return { status:404, message: error.originalError.info.message };
    }
}

module.exports.UpdateUser = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result1 = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .input('firstName', mssql.VarChar, data.firstName)
            .input('lastName', mssql.VarChar, data.lastName)
            .input('birthDate', mssql.Date, data.date)
            .input('address', mssql.VarChar, data.address)
            .input('phone', mssql.VarChar, data.phone)
            .input('mail', mssql.VarChar, data.mail)
            .execute('SP_update_information')
        return { status: 200, message: "success" };
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}



