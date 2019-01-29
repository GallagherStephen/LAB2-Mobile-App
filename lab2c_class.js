"use strict";
exports.__esModule = true;
var toDoclass = /** @class */ (function () {
    function toDoclass() {
        this.tasks = []; //this code taken from the lab2.ts and modified to obey interface 
    }
    toDoclass.prototype.addTask = function (task) {
        this.tasks.push(task); //every time we use the task word we have to put in (this.) infront of it
        return this.tasks.length;
    };
    toDoclass.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    toDoclass.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task, 0); //searches the array at position 0            
        if (index > -1) //this code taken from the lab2.ts and modified to obey interface 
         {
            this.tasks.splice(index, 1);
            console.log("item " + task + " has been deleted");
        }
        else {
            console.log("item not found: " + task);
        }
        return this.tasks.length;
    };
    return toDoclass;
}());
//to test the code
var testClass = new toDoclass();
testClass.addTask("item1");
testClass.addTask("item2");
testClass.addTask("item3");
testClass.listAllTasks();
testClass.deleteTask("item2");
testClass.listAllTasks();
