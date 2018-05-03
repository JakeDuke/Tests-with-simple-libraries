var todoList = {
        storage: {},
        
        next_id: 0,
        
        addTodo: function(todo) {
        this.storage[this.next_id] = todo;
        this.next_id ++;
        
        },
        displayTodos: function() {
        console.log(this.storage);
        },
        readAll: function() {
            return this.storage;
        },
        updateTodo: function(position, newValue) {
        this.storage[position] = newValue;
        },
        delete_one: function(value) {
        delete this.storage[value];
        },
        update_one: function(oldValue, newValue) {
        
        var index = this.storage.indexOf(oldValue);
    
        if (index !== -1) {
            this.storage[index] = newValue;
        }
    }
};

  module.exports = todoList;  