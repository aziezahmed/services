import express from "express";
import cron from "node-cron";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
  });

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );