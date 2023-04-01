
const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'jsx');
app.engine("jsx", require('express-react-views').createEngine());

const pokemon = require('./models/pokemon.js');


// middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
//  pareses payload
app.use(express.urlencoded({extended:false}));


app.get("/", (req,res) => {
    res.send('<h1>Welcome to Glenbrook North highschool!</h1>');
});

app.get('/pokemon', (req, res) => {
    res.render("Index", {pokemon:pokemon});
});



app.get('/pokemon/new',(req,res) => {
    res.render("New");
});
// post to array
app.post('/pokemon', (req, res) => {
    if(req.body.requirements === 'on'){ 
        req.body.requirements = true; 
    } else { 
        req.body.requirements = false; 
    }
    pokemon.push(req.body);
    console.log(pokemon);
    res.redirect('/pokemon');
});


app.get('/pokemon/update',(req,res) => {
    res.render("Update");
});
// post to array
app.post('/pokemon/0', (req, res) => {
    if(req.body.requirements === 'on'){ 
        req.body.requirements = true; 
    } else { 
        req.body.requirements = false; 
    }
    pokemon.push(req.body);
    console.log(pokemon/[]);
    res.redirect('/pokemon/');
});




app.get('/pokemon/:id', (req, res) => {
    res.render("Show",{pokemon:pokemon[req.params.id]});
});


app.listen(port,() => {
    console.log('Listening on port', port);
});