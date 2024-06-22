import mysql from 'mysql2/promise';
import { database } from './config'; // Asume que tienes un archivo de configuración

const pool = mysql.createPool({
  host: database.host,
  user: database.user,
  password: database.password,
  database: database.name,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;