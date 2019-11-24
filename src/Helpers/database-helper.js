export default function createTable(){
    const { Client } = require('pg');

    const client = new Client({
        connectionString: "postgres://hdzsfwizwsoxxz:b62525ba2575aa2a67faab4ab24f80234d850305522338e2bb16dd02f474db8e@ec2-54-195-252-243.eu-west-1.compute.amazonaws.com:5432/din8m6nuaj",
        ssl: true,
      });
      
      client.connect();
      
      client.query('create table patients ( id SERIAL PRIMARY KEY, familyname varchar(128) NOT NULL, givenname varchar(128) NOT NULL, phonenumber varchar(32));', (err, res) => {
        if (err) throw err;
        client.end();
      });
}

