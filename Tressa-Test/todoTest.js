let tressa = require('./tressa');
let Todo = require('./todoList');

tressa.title("Todo Addition");


Todo.addTodo('one');
Todo.addTodo('two');
Todo.addTodo('three');

tressa.assert(JSON.stringify(Todo.readAll()) === JSON.stringify({ '0': 'one', '1': 'two', '2': 'three' })
, "object addition");

Todo.updateTodo(0, 'lol');

tressa.assert(JSON.stringify(Todo.readAll()) === JSON.stringify({ '0': 'lol', '1': 'two', '2': 'three' })
, "object modifying");

// add one thing
// add one thing
// add one thing
// update third thing
// delete first 
// assert(readAll() == {what should be in the database})