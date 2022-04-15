import express, { RequestHandler } from 'express';
import { knex } from 'knex';

interface Book {
  id: number;
  title: string;
  author: string;
}

const app = express();
const port = process.env.PORT || 3000;

const getBooks = async (): Promise<Book[]> => {
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
  });
  const result = await pgDb.select('*').from<Book>('book');
  return result;
}

// define a route handler for the default home page
app.get('/', (_req, res) => {
  res.send('Hello, World!')
});

app.get('/books', (async (request, response) => {
  const books = await getBooks();
  response.send(books)
}) as RequestHandler);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});