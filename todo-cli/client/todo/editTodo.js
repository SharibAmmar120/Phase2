import fs from "fs/promises"
import readLineSync from "readline-sync"
import chalk from "chalk"
import randomStringGenerator from "../utils/randomString.js"

async function editTodo(email) {
    try {
        console.clear()
        console.log(chalk.green("*************************************************"));
        console.log("\t\t EDIT TODO CLI \t\t");
        console.log(chalk.green("*************************************************"));

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)
        let userFound = fileData.find(ele => ele.email == email)
        if (!userFound) {
            throw ("Some error occured")
        }
        
        let todoId=readLineSync.question("Enter unique id of task : ")
        let taskFound=userFound.todo.find(ele=> ele.task_id ==todoId)
        if(!taskFound){
            console.log("The Task was not found / doensn't exist")
            return
        }
        

        let option = readLineSync.questionInt("Enter 1 to change task name , enter 2 to change task status : ")
        if(option == 1){
            let newTaskName = readLineSync.question("Enter the new Task Name : ")
            taskFound.todoName = newTaskName
        }else if(option == 2){
            let newStatus = readLineSync.question("Enter Y/yes for completed task : ")
            if(newStatus == 'Y' || newStatus == "y" || newStatus == 'yes'){
                taskFound.isCompleted = true
            }
        }else {
            console.log("wrong input")
            return
        }

        

        await fs.writeFile("data.json",JSON.stringify(fileData))
        console.log(chalk.bgBlackBright("Task added successfully"));



    } catch (error) {
        console.log(error);
    }
}
// editTodo("sharib@gmail.com")
export default editTodo