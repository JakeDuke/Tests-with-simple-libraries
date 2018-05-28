var test = require('kludjs');
var Todo = require('./todoList');

Todo.addTodo('one');
Todo.addTodo('two');
Todo.addTodo('three');


test('Testing Objects', function() {
     ok(eq(Todo.readAll(), { '0': 'one', '1': 'two', '2': 'three' }),
    'Objects are equal');
});