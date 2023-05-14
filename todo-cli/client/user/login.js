import readLineSync from "readline-sync"
import fs from "fs/promises"
import chalk from "chalk"

import loggedIn from "../todo/index.js"

async function login() {
    try {
        console.clear()
        console.log(`
   ====================================\n
   \tUser Login\n 
   ====================================`);

        let email = readLineSync.questionEMail("Enter your email : ")
        let password = readLineSync.question("Enter your password : " , { hideEchoBack: true })
        while(!password){
            password=readLineSync.question("Enter valid password")
        }
      
        let data = await fs.readFile("data.json")
        data = JSON.parse(data)
        
        let emailFound = data.find(ele => ele.email == email)
        let passwordData=data.find(ele => ele.password == password)
        if (!emailFound) {
          throw chalk.bgGray("Email not found")
        }
        if(emailFound.password!==password) 
            throw chalk.bgGray("Unathorized  Acess ")
            console.log("User Login Successful");
            await loggedIn(email)
        
    

    } catch (error) {
        console.log(error);
    }

}
export default login