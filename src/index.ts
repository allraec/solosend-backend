import express, { json } from 'express';
import db from './models/db.js';


const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(json());

// Basic route
app.get('/', (req, res) => {
  res.send('SoloSend Backend Initialized');
});

app.get('/db-test', async (req, res) => {
    try {
      // Adjusted query to match the exact table and column names
      const result = await db.query('SELECT * FROM public."User" WHERE "UserId" = $1', [1]);
      res.json(result.rows[0]);  // Send the entire row as a JSON response
    } catch (err) {
      console.error('Query Error:', err as Error);  // Log the actual query error with type assertion
      res.status(500).send('Query failed');
    }
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});