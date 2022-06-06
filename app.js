const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5001;


require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //allows for shortened paths for file internal links
app.use(expressLayouts);

app.set('layout', './layouts/main'); //layout template file path
app.set('view engine', 'ejs');

const routes = require('./server/routes/ribbonRoutes.js')
app.use('/', routes)

app.listen(port, () => console.log(`Listening to port ${port}`));

