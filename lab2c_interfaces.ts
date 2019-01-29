//CREATING AN INTERFACE BELOW
//CREATING A CONTRACT ,CLASSES HAVE TO OBEY

export interface toDointerface{
    tasks:Array<string>;
    addTask(task:string):number;         //takes a string and returns a number
    listAllTasks():void;
    deleteTask(task:string):number;      //takes a string and returns a number
}