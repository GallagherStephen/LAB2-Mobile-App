import {toDointerface} from './lab2c_interfaces';

class toDoclass implements toDointerface{
   
    tasks: Array<string> = [];            //this code taken from the lab2.ts and modified to obey interface 
   
    addTask(task:string):number {
       this.tasks.push(task);           //every time we use the task word we have to put in (this.) infront of it
        return this.tasks.length
    }

     listAllTasks(){
        this.tasks.forEach(function(task){
            console.log(task);
        })
    }

    deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task,0);      //searches the array at position 0            

        if(index > -1)                                      //this code taken from the lab2.ts and modified to obey interface 
        {
            this.tasks.splice(index,1);
            console.log("item " + task+ " has been deleted");
        }
        else
        {
            console.log("item not found: " + task );
        }
        
        return this.tasks.length;
        
    }
   


}

    //to test the code
    let testClass = new toDoclass();
    testClass.addTask("item1");
    testClass.addTask("item2");
    testClass.addTask("item3");
    testClass.listAllTasks();
    testClass.deleteTask("item2");
    testClass.listAllTasks();
    
