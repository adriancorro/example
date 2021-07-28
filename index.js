const express = require('express');
const app = express();

app.get('/', (res, req) => {
    res.send('Hello Express')
});

app.listen(3000, () => console.log("Server is up and running 2vvddfdfddddf"))