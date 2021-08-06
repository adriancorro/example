const express = require('express');
const cors = require ('cors');
const Client = require ('pg').Client;
const { json } = require('express');



let db;

if(process.env.NODE.ENV === "production"){
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
    res.send('Hello Express heroku main')
});

app.get("/hola" , (req, res) => {
    db.query(`SELECT * from customers`)
    .then((table) => res.json ({data: table.rows}))
    .catch((err)  => res.json(err))
})

process.env.PORT = 3000;
app.listen(process.env.PORT || 5000, () => {
    console.log("Listening on PORT " + process.env.PORT || 3000)}
)
