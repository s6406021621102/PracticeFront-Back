//จัดการกับฐานข้อมูล connect กับ data base // ดึงข้อมูลมาใช้
const sqlite3 = require('sqlite3');

// ต่อกับ Database 
const db = new sqlite3.Database('./database/user.sqlite');

//สร้าง table หลัง exits จะเป็นชื่อ 
db.run(`CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT,
    status INTEGER  
)`);

module.exports = db;