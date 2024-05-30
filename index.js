#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magentaBright.bold("\n \tTODO-LIST APPLICATION\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.greenBright("Enter Your New Task : "),
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo List Successfully`);
    let addmoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.greenBright("Do You want to add more task?"),
            default: "False"
        }
    ]);
    conditions = addmoreTask.addmore;
}
console.log(chalk.blue("Your updated Todo-List :"), todoList);
