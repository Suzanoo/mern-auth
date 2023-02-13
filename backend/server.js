require('dotenv').config();
const connectDB = require('./config/db');

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Connect to Database
// const HOST = process.env.DATABASE;
const HOST = process.env.DATABASE_LOCAL;
connectDB(HOST);

// Import express application
const app = require('./app');

// Port settings
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`[INFO] Running on port ${port}...`);
});

// Handle unhandled rejection
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
