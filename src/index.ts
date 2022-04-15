import express from 'express';
import { Client } from 'pg';

const app = express();
const port = process.env.PORT || 3000;

// define a route handler for the default home page
app.get('/', (_req, res) => {
  res.send('Hello, World!');
});

// define a route handler for the default home page
app.get('/books', async (req, res) => {
  try {
    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: 'postgres',
      port: 5432,
    })
    void client.connect();
    const result = await client.query('SELECT * FROM book');
    res.send(result.rows);

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});