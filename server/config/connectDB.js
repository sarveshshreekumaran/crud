const mongoose = require("mongoose");

async function connectDB() {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Connect to ${connection.connections[0].name} db`);
}

module.exports = connectDB;
