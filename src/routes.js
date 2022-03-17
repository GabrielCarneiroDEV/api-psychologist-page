const express = require('express');
const { login, register } = require('./controllers/users');
const { getPosts, sendPost, deletePost, editPost, getPost } = require('./controllers/posts');
const { loginVerify } = require('./middlewares/loginVerify');
const routes = express();

routes.get('/posts', getPosts);
routes.get('/post/:id', getPost);
routes.post('/register', register)
routes.post('/login', login);

routes.use(loginVerify)
routes.post('/posts', sendPost);
routes.delete('/posts/:id', deletePost);
routes.put('/posts/:id', editPost);

module.exports = routes;
