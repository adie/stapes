var TodoModel = Stapes.create({name : "TodoModel"}).extend({
    "addTask" : function(name) {
        this.push({
            "done" : false,
            "name" : name
        });
    },

    "clearCompleted" : function() {
        this.remove(function(item) {
            return item.done === true;
        });
    },

    "getDone" : function() {
        return this.filter(function(item) {
            return item.done === true;
        }).length;
    },

    "getLeft" : function() {
        return this.filter(function(item) {
            return item.done === false;
        }).length;
    }
});