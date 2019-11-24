export default function createTable(){
    const { Client } = require('pg');
    delete pg.native; 
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
      });
      
      client.connect();
      
      client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
          console.log(JSON.stringify(row));
        }
        client.end();
      });
}

