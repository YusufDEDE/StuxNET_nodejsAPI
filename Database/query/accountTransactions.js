const sql = require("../mssqlConnector")
const mssql = require('mssql');

module.exports.accounts = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .execute('SP_account_list')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports.addAccount = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.NVarChar, data.tc)
            .execute('SP_add_account')
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}


module.exports.depositAccount = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .input('additNo', mssql.Int, data.additNo)
            .input('deposit', mssql.Money, data.deposit)
            .execute('SP_deposit_into_acc')
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports.withdraw = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .input('additNo', mssql.Int, data.additNo)
            .input('withdrawal', mssql.Money, data.deposit)           
            .execute('SP_withdrawal_from_acc') 
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}


module.exports.deleteAccount = async (data) => {

    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .input('additNo', mssql.Int, data.additNo)
            .execute('SP_remove_account')
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports.virman = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .input('sendAddit', mssql.Int, data.sendAddit)
            .input('recAddit', mssql.Int, data.recAddit)
            .input('money', mssql.Money, data.money)
            .execute('SP_virman') 
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports.eft = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt, data.tc)
            .input('sendAddit', mssql.Int, data.sendAddit)
            .input('recAcc', mssql.BigInt, data.recAcc)
            .input('recAddit', mssql.Int, data.recAddit)
            .input('money', mssql.Money, data.money)
            .execute('SP_eft') 
        return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

