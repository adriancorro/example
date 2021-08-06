require('dotenv').config();
const express = require('express');
const cors = require ('cors');
const Client = require ("pg").Client;
const { json } = require('express');



let db;

db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
})

if(process.env.NODE.ENV){
    db = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    })
}else{
    db = new Client({
        database: 'cyf_ecommerce',
        host: 'localhost',
        user: 'postgres',
        password: 'admin',
        port: 5432
    });
}

db.connect();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    db.query(`SELECT * from customers`)
    .then((table) => res.json ({data: table.rows}))
    .catch((err)  => res.json(err))
});

app.get("/hola" , (req, res) => {
    db.query(`SELECT * from customers`)
    .then((table) => res.json ({data: table.rows}))
    .catch((err)  => res.json(err))
})

app.listen(process.env.PORT, () => 
    console.log("Listening on PORT " + process.env.PORT )
);
