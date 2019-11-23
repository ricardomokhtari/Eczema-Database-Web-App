const { Client } = require('pg');
delete pg.native;

export default function createTable(){
    const client = new Client({
        connectionString: "ec2-54-195-252-243.eu-west-1.compute.amazonaws.com",
        ssl: true,
      });
      
      client.connect();
      
      client.query('create table patients ( id SERIAL PRIMARY KEY, familyname varchar(128) NOT NULL, givenname varchar(128) NOT NULL, phonenumber varchar(32));', (err, res) => {
        if (err) throw err;
        client.end();
      });
}

