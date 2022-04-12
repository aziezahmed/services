/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";
import { Client } from 'pg';


const app = express();
const port = 3000; // default port to listen


// define a route handler for the default home page
app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

// define a route handler for the default home page
app.get("/books", (_req, res) => {
  try {

    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: 'postgres',
      port: 5432,
    })
    void client.connect();
    client.query('SELECT * FROM book', (err, res2) => {
      console.log(err, res2)
      void client.end();
    })

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  res.send("Hello, World!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});