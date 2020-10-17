// import dependencies
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// starting express
const server = express()
server
    //utilizar body do req
    .use(express.urlencoded({ extended: true }))
    // using static files 
    .use(express.static('public'))

    // config template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // aplications routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// start server
server.listen(5500)