require('dotenv').config();

const connectDB = require('./config/db');

// Connect to Database
connectDB();

// Handle uncaught exceptions
// process.on('uncaughtException', (err) => {
//   console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   process.exit(1);
// });

// Import express application
const app = require('./app');

// Port settings
const port = 5000;
app.listen(port, () => {
  console.log(`[INFO] Running on port ${port}...`);
});

// Handle unhandled rejection
// process.on('unhandledRejection', (err) => {
//   console.log('UNHANDLED REJECTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });
