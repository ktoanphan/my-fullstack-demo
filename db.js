const Pool = require('pg').Pool;

const pool = new Pool({    
    user: "postgres",
    password: "Toan1310",
    host: "localhost", 
    port: 5432,
    database: "demodb"
}); 

module.exports = pool;