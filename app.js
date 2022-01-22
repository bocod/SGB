const express = require('express');
const path = require('path');

const app = express();

app.listen( process.env.PORT || 3000, ()=>{
    console.log('Server running!!!')
});

app.set('view engine', 'ejs');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.render('index');
});