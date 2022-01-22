const { O_DIRECT } = require('constants');
const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, ()=>{
    console.log('Server running on porth 3000')
});

app.set('view engine', 'ejs');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.render('index');
});