/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { knex } from 'knex';

const app = express();
const port = process.env.PORT || 3000;

// define a route handler for the default home page
app.get('/', (_req, res) => {
  res.send('Hello, World!')
});

app.get('/books', async (req, res, next) => {
  try {
    const pgDb = knex({
      client: 'pg',
      connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'postgres',
        port: 5432,
      },
      acquireConnectionTimeout: 2000
    })
    const result = await pgDb.select('*').from('book')

    if (result) {
      res.json(result)
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});