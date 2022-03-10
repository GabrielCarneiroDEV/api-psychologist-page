const express = require('express');
const { getPosts,  sendPost, deletePost } = require('./controllers/posts');
const routes = express();


routes.get('/posts', getPosts);
routes.post('/posts', sendPost)
routes.delete('/posts/:id', deletePost)

module.exports = routes;