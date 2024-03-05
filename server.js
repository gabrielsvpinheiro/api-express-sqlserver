const express = require('express');
const { connect } = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());

//app.use('/api', exampleRoutes);

// app.get('/api/example', async (req, res) => {
//   try {
//     await connect();

//     const result = await connect.sql.query('SELECT * FROM YourTable');
//     res.json(result.recordset);
//   } catch (error) {
//     console.error('Error executing the query', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});