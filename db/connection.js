const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "Venezuela1397!",
    database: "tracker",
  },
  console.log("Connected to the election database.")
);
