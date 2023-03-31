const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'jsx');
app.engine("jsx", require('express-react-views').createEngine());

const pokemon = require('./models/pokemon.js');






app.get("/", (req,res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
});

app.get('/pokemon', (req, res) => {
    res.render("Index", {pokemon:pokemon});
});

app.get('/pokemon/:id', (req, res) => {
    res.render("Show",{pokemon:pokemon[req.params.id]});
});


app.listen(port,() => {
    console.log('Listening on port', port);
});