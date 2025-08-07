// test-db.js
const pool = require('./db');

pool.query('SELECT 1 + 1 AS result', (err, results) => {
  if (err) {
    console.error('❌ Query error:', err);
  } else {
    console.log('✅ Test query result:', results[0].result); // should log 2
  }
});
