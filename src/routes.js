const express = require('express');
const routes = express();


routes.get('/posts', (req, res) => {
    res.json("olá");
})
//routes.post()

module.exports = routes;