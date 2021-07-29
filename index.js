const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express heroku main')
});

app.listen(process.env.PORT || 5000   )
