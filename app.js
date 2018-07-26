const express = require('express');
const app = express()

app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.listen(4000, () => {
    console.log('Server Running at localhost:4000');
});