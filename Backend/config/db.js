const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'aisha@140',
});

client.connect((err) => {
    if (!err) {
        console.log('connected');
        // Now that you're connected, execute your query
        client.query('SELECT * FROM "user"', (err, res) => {
            if (err) {
                console.error(err.stack);
            } else {
                console.log(res.rows);
            }
            // End the client connection after querying
            client.end();
        });
    } else {
        console.error(err.stack);
    }
});

client.on("connect", ()=>{
    console.log("Database connection")
})
module.exports =client;