import fs from "fs/promises"
import readLineSync from "readline-sync"
import chalk from "chalk"
import axios from "axios"
import { Spinner } from "cli-spinner"
import { setTimeout } from "timers/promises" 
import { loading } from "./utils/loading.js"
import userRegister from "./user/registerUser.js"
import login from "./user/login.js"
import createTodo from "./todo/createTodo.js"
import deleteUser from "./user/delete.js"

async function main() {
    try {
        console.clear()//Every single time main function is called it will clear the everything in terminal
        console.log(chalk.green("*************************************************"));
        console.log("\t\t TODO CLI \t\t");
        console.log(chalk.green("*************************************************"));
        const options = [
            "Exit The Program", "Create a User", 'Login', 'Delete User'
        ]
        options.forEach((ele, i) => console.log(`Enter ${i} to ${ele}`))//to get the menu
        console.log(chalk.green("*************************************************"));
        const option = readLineSync.questionInt("Enter your option from the above menu : ")
        if (option < 0 || option > option.length) {
            let spinner = loading('Invalid option please try again');
            await setTimeout(5000)
            spinner.stop()
            return main()





        } else {
            switch (option) {
                case 0:
                    console.log("Exiting , Bye")
                    return;
                case 1:
                    await userRegister()
                    break;
                case 2:
                    await login();
                    break;
                case 3:
                    await deleteUser()
                    // console.log("User Deletion");
                    break;
               
            }
            var willContinue = readLineSync.question("Do you want to Continue? (Y/N) : ");
            if (willContinue == 'y' || willContinue == 'Y' || willContinue == "yes" || willContinue == "Yes") {
                let spinner = loading("Redirecting to menu ....")
                await setTimeout(2000)
                spinner.stop()
                return main()
            } else {
                console.log(chalk.bgGreenBright("Thank you for Using our application , See You Again!"))
            }


        }

    } catch (error) {
        console.log(error);
    }

}

main()