
//(a) Create an array of strings.
let tasks: Array<string> = [];

//BELOW ADDTASK DOES THE FOLLOWING
//i. It receives a string as a parameter called task.
//ii. It adds the task to the array.
//iii. It prints a message in the console indicating the insertion.
//iv. It returns the number of elements in the array after the insertion.

function addTask(task:string):number {
    tasks.push(task);
    
    //to get the length of the array
    return task.length
}

//LISTALLTASKS FUCTION BELOW DOES THE FOLLOWING
//i. It iterates over all the tasks in the array.
//ii. It prints each array item in the console.

function listAllTasks(){
    tasks.forEach(function(task){
        console.log(task);
    })
}

//(d) Create a deleteTask function:
//i. It receives a string as a parameter called task.
//ii. It removes that string from the array.
//iii. It prints in console a message indicating the deletion.
//iv. It returns the number of elements in the array after the deletion.

function deleteTask(task:string):number{
    let index:number = task.indexOf(task,0);      //searches the array at position 0
    
    if(index > -1)
    {
        tasks.splice(index,1);
        console.log("item " + task+ " has been deleted");
    }
    else
    {
        console.log("item not found: " + task );
    }
    
    return tasks.length;
    
}

//to test our code
addTask("item1");
addTask("item2");
addTask("item3");
listAllTasks();
deleteTask("item2");
listAllTasks();