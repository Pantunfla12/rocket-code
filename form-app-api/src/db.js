import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

conn.connect();

console.log("database connected ", process.env.DATABASE);
