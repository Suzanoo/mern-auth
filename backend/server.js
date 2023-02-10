const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Handle uncaught exceptions
// process.on('uncaughtException', (err) => {
//   console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   process.exit(1);
// });

// configure environment
dotenv.config({ path: '../.env' });

// Import express application
const app = require('./app');
console.log("Hello, world!");

/*
// Connect to MongoDB
//https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1
const DB = process.env.DATABASE_LOCAL;
mongoose.set('strictQuery', false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((conn) => {
    // console.log(conn.connection);
    console.log('[INFO] Connection established!');
  });

console.log(`[INFO] Conneced to MongoDB in ${process.env.NODE_ENV} mode.`);
// console.log(process.env); // see all nodejs env
// console.log(app.get('env'));

const port = 3000;
app.listen(port, () => {
  console.log(`[INFO] Running on port ${port}...`);
});
*/

// Handle unhandled rejection
// process.on('unhandledRejection', (err) => {
//   console.log('UNHANDLED REJECTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });
