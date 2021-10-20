const Pool = require('pg').Pool;

const pool = new Pool({    
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    user: "xpxfphazcovstq",
    password: "190e58d66cb598a2cc471b553791dc4e8a946ea2ab1cdc4945e677456a0d0904",
    host: "localhost", 
    port: 5432,
    database: "d2v51olrsv2so3"
}); 

module.exports = pool;