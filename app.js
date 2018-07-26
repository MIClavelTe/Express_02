const express = require('express');
const app = express()

app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.render('index');
});

app.listen(4000, () => {
    console.log('Server Running at localhost:4000');
});