const express = require('express');
const { getPosts,  sendPost } = require('./controllers/posts');
const routes = express();


routes.get('/posts', getPosts);
routes.post('/posts', sendPost)

module.exports = routes;