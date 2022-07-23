// npm install 
const mysql = require('mysql2/promise');

const config = require('../config');

async function query(sql, params) {
    const conexao = await mysql.createConnection(config.db);
    const [results, ] = await conexao.execute(sql, params);
    return results;
}

module.exports = {
    query
}
