import fs from "fs/promises"
import readLineSync from "readline-sync"
import chalk from "chalk"
import axios from "axios"
import { Spinner } from "cli-spinner"
import { setTimeout } from "timers/promises" 
import { loading } from "../utils/loading.js"
import createTodo from "./createTodo.js"
import editTodo from "./editTodo.js"
import getallTodo from "./getallTodo.js"


async function loggedIn(email){
    try {
        console.clear()//Every single time main function is called it will clear the everything in terminal
        console.log(chalk.green("*************************************************"));
        console.log("\t\t USER TODOs CLI \t\t");
        console.log(chalk.green("*************************************************"));
        const options=[
            "Exit The Program", " Create TODO", "Get all TODOs ", "Edit TODO "
    ]
        options.forEach((ele, i) => console.log(`Enter ${i} to ${ele}`))//to get the menu
        console.log(chalk.green("*************************************************"));
        const option = readLineSync.questionInt("Enter your option from the above menu : ")
        if (option < 0 || option > option.length) {
            let spinner = loading('Invalid option please try again, Redirecting to the menu');
            await setTimeout(5000)
            spinner.stop("clean")
            return loggedIn()





        } else {
            switch (option) {
                case 0:
                    console.log("Exiting , Bye")
                    return;
                case 1:
                    
                    await createTodo(email)
                    break;
                case 2:
                    await getallTodo(email)
                    
                    break;
                case 3:
                    await editTodo(email)
                    break;
               
            }
            var willContinue = readLineSync.question("Do you want to Continue? (Y/N) : ");
            if (willContinue == 'y' || willContinue == 'Y' || willContinue == "yes" || willContinue == "Yes") {
                let spinner = loading("Redirecting to menu ....")
                await setTimeout(3000)
                spinner.stop("clean")
                return loggedIn(email)
            } else {
                console.log(chalk.bgGreenBright("Thank you for Using our application , See You Again!"))
            }


        }
    }
     catch (error) {
        console.log(error);
    }
}
export default loggedIn
    