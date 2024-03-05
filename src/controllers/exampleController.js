const { connect } = require('../db');

async function getExamples(req, res) {
  try {
    await connect();
    const result = await connect.sql.query('SELECT * FROM YourTable');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error executing the query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getExamples,
};