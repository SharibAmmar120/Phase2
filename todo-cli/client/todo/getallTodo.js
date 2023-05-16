import fs from "fs/promises"
import readLineSync from "readline-sync"
import chalk from "chalk"


async function getallTodo() {
    try {
        console.clear()
        console.log(chalk.green("*************************************************"));
        console.log("\t\t GET ALL TODO'S CLI \t\t");
        console.log(chalk.green("*************************************************"));

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)
        let name = readLineSync.question("Enter a Name : ")
        while (!name) {
            name = readLineSync.question("Please enter a valid name")
        }
        let userFound = fileData.find(ele => ele.username ==name )
        if (!userFound) {
            throw ("User not found")
        }
        console.log(userFound);

        
        console.log(chalk.bgYellowBright("Details of Todo user"));



    } catch (error) {
        console.log(error);
    }
}
export default getallTodo