import chalk from "chalk";
import { readFile } from "fs";
import fs from "fs/promises"
import readLineSync from "readline-sync"

async function userRegister() {
    try {
        console.clear()
        console.log(`
   ====================================\n
   \tUser Register\n 
   ====================================`);
        let username = readLineSync.question("Enter your name : ")
        while (!username) {
            username = readLineSync.question("Please enter the username : ")
        }
        let email = readLineSync.questionEMail("Enter your email : ")//Inbuilt for email
        let password = readLineSync.question("Enter your password : ", { hideEchoBack: true })//For hiding password
        let confirmPassword = readLineSync.question("Confirm your password : ", { hideEchoBack: true })
        while (password !== confirmPassword) {
            console.log("Passwords don't match")
            password = readLineSync.question("Re-enter your password : ", { hideEchoBack: true })
            confirmPassword = readLineSync.question("Enter your password again : ", { hideEchoBack: true })
        }
        let phone = readLineSync.questionInt("Enter your phone number : ")
        while (!phone) {
            phone = readLineSync.question("Please enter your phone number")
        }
        let location = readLineSync.question("Enter you Address : ")



        let data = await fs.readFile("data.json")//checking the user is already present or not(checking for unique email)
        data = JSON.parse(data)
        console.log(data);
        let emailFound = data.find(ele => ele.email == email)//ele.email from our data and email from user
        if (emailFound) {
            throw chalk.bgBlueBright("User already exists")
        }
        let userData = {
            username,
            email,
            phone,
            location,
            password,
            todo:[]
        }
        data.push(userData)
        await fs.writeFile("data.json", JSON.stringify(data))






    } catch (error) {
        console.log(error);
    }
}

export default userRegister