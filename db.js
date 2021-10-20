const Pool = require('pg').Pool;

const pool = (() => {
    if (process.env.NODE_ENV !== 'production') {
        return new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: false
        });
    } else {
        return new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
              }
        });
} })();

// const pool = new Pool({
//     user: "postgres",
//     password: "Toan1310",
//     host: "localhost",
//     port: 5432,
//     database: "demodb"
//   });


module.exports = pool;