const db = require('./db');

const rows = db.prepare ('SELECT body FROM posts ').all();
console.table(rows);