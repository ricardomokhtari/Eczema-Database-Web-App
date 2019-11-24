export default function createTable(){
    const { Client } = require('pg');

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
      });
      
      client.connect();
      
      client.query('create table patients ( id SERIAL PRIMARY KEY, familyname varchar(128) NOT NULL, givenname varchar(128) NOT NULL, phonenumber varchar(32));', (err, res) => {
        if (err) throw err;
        client.end();
      });
}

