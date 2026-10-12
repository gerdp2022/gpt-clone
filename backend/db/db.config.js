// // import mysql from "mysql2/promise";

// // const db = mysql.createPool({
// //   host: process.env.DB_HOST || "localhost",
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASSWORD,
// //   database: process.env.DB_DATABASE,
// // });

// // export default db;

// const mysql = require("mysql2/promise");

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   charset: "utf8mb4",
//   ssl: { rejectUnauthorized: false },
//   waitForConnections: true,
//   connectionLimit: 5,
//   enableKeepAlive: true,
// });

// module.exports = pool;

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: "utf8mb4",
  ssl: { rejectUnauthorized: false },
  connectTimeout: 60000,
  waitForConnections: true,
  connectionLimit: 5,
  enableKeepAlive: true,
});

export default pool;
