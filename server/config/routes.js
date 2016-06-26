var mongoose = require('mongoose');

var Users = require('../controllers/usersController.js');
var Topic = require('../controllers/topicsController.js')();
var Posts = require('../controllers/postsController.js')();
var Comments = require('../controllers/commentsController.js')();

// console.log(Users);


module.exports = function(app){


app.post('/login', Users.pullUser);

app.post('/users', Users.show);

app.get('/users', Users.index);

app.get('/users/:id', Users.show);

// app.get('/users/:id/edit', Users.edit);

app.post('/users', Users.create);

// app.put('/users/:id', Users.update);

// app.delete('/users/:id', Users.delete);


// app.post('/login', Users.login);
app.get('/topics', Topic.index);
app.get('/topics/:id', Topic.show);
// app.get('/users/:id/edit', Users.edit);
app.post('/topics', Topic.create);
// app.put('/users/:id', Users.update);
// app.delete('/users/:id', Users.delete);



app.get('/posts', Posts.index);
app.get('/posts/:id', Posts.show);
// app.get('/posts/:id/edit', Posts.edit);
app.post('/posts', Posts.create);
app.put('/posts/:id', Posts.update);
app.put('/postsd/:id', Posts.dislike);
// app.delete('/posts/:id', Posts.delete);



app.get('/comments', Comments.index);
// app.get('/users/:id', Users.show);
// app.get('/users/:id/edit', Users.edit);
app.post('/comments', Comments.create);
// app.put('/users/:id', Users.update);
// app.delete('/users/:id', Users.delete);




};