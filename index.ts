#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;

console.log(chalk.magentaBright.bold("\n \tTODO-LIST APPLICATION\n"))

let main = async ()=>{
    while(conditions){
        let option = await inquirer.prompt([
            {
                name : "choice",
                type : "list",
                message : "Select an option you want to do:",
                choices : ["Add Task", "Delete Task", "Update Task", "View Todo List", "Exit"]
            }
        ])
        if(option.choice === "Add Task"){
            await addtask()
        }
        else if(option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo List"){
            await viewtask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
    }
}
//functin to add new task in the list.
let addtask = async () => {
    let newTask = await inquirer.prompt([
        {
            name : "task",
            type : "input",
            message : "Enter Your New Task:"
        }
    ])
    todoList.push(newTask.task)
    console.log(`\n ${newTask.task} task added successfully in Todo List\n`)
}
//function to view todo list
let viewtask = () => {
    console.log("\nYour Todo List: \n")
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    })
    console.log("\n");
}
//function for delete the task from list
let deleteTask = async () => {
    await viewtask()
    let taskIndex = await inquirer.prompt([
        {
            name : "index",
            type : "number",
            message : "Enter the 'index no.' of the task you want to delete: "
        }
    ])
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo List\n`)
}
//function to update Task
let updateTask = async () => {
    await viewtask()
    let update_task_index = await inquirer.prompt([
        {
            name : "index",
            type : "number",
            message : "Enter the 'index no' of the task you want to update :"
        },
        {
            name : "new_task",
            type : "input",
            message : "Now enter new task name :",
        }
    ])
    todoList[update_task_index.index -1] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index.index} updated successfully.[For updated List check option: "View Todo List"]`)
}

main();