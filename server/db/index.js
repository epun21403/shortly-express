const mysql = require('mysql2');
const createTables = require('./config');
const Promise = require('bluebird');
const database = 'shortly';
/* Altered to create database in host MYSQL
const connection = mysql.createConnection({
  user: 'student',
  password: 'student'
});
 */
// STUDENT NOTE - Shouldn't this be my database?
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
});

// Check Bluebird documentation for promisifications
const db = Promise.promisifyAll(connection, { multiArgs: true });

// STUDENT NOTE - Is .then pass anything from one to another or is it determining sequence?
db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

module.exports = db;