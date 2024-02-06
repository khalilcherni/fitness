const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fitness',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log("Database is connected 👽");

module.exports = {
    pool: pool,
    query: async (sql, values) => {
        try {
            const [rows, fields] = await pool.execute(sql, values);
            return rows;
        } catch (error) {
            throw error;
        }
    }
};
