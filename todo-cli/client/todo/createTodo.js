import fs from "fs/promises"
import readLineSync from "readline-sync"
import chalk from "chalk"
import randomStringGenerator from "../utils/randomString.js"

async function createTodo(email) {
    try {
        console.clear()//Every single time main function is called it will clear the everything in terminal
        console.log(chalk.green("*************************************************"));
        console.log("\t\t CREATE TODO CLI \t\t");
        console.log(chalk.green("*************************************************"));

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)
        let userFound = fileData.find(ele => ele.email == email)
        if (!userFound) {
            throw ("Some error occured")
        }

        let todoName = readLineSync.question("Enter a Todo name : ")
        while (!todoName) {
            todoName = readLineSync.question("Please enter a valid Todo name")
        }
        let todoData = {
            todoName,
            isCompleted: false,
            task_id: randomStringGenerator(10)
        }
        // console.log(todoData);
        userFound.todo.push(todoData)

        await fs.writeFile("data.json",JSON.stringify(fileData))
        console.log(chalk.bgBlackBright("Task added successfully"));



    } catch (error) {
        console.log(error);
    }
}
export default createTodo