const sql = require('mssql');

const config = {
  user: 'yourUser',
  password: 'yourPassword',
  server: 'localhost',
  database: 'yourDatabase',
  options: {
    encrypt: false,
  },
};

async function connect() {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (error) {
    console.error('Error connecting to SQL Server', error);
  }
}

module.exports = {
  connect,
  sql,
};