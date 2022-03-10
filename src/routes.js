const express = require('express');
const { getPosts, sendPost, deletePost, editPost, getPost } = require('./controllers/posts');
const routes = express();

routes.get('/posts', getPosts);
routes.get('/post', getPost);
routes.post('/posts', sendPost);
routes.delete('/posts/:id', deletePost);
routes.put('/posts/:id', editPost);

module.exports = routes;
