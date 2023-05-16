import readLineSync from "readline-sync"
import fs from "fs/promises"
import chalk from "chalk"

async function deleteUser () {
    try {
        console.clear()
        console.log(`
   ====================================\n
   \tDelete User\n 
   ====================================`);

   let todoId=readLineSync.question("Enter unique id of task : ")
   let fileData = await fs.readFile("data.json")
   fileData = JSON.parse(fileData)
   let userFound = fileData.filter(ele => ele.task_id==todoId)
   if (!userFound) {
       throw ("Some error occured")
   }
//    let taskFound=userFound.todo.filter(ele=> ele.task_id ==todoId)
//    if(!taskFound){
//        console.log("The Task was not found / doensn't exist")
//        return
//    }
   
   
  
//    console.log(userFound);
   
   

//    let option = readLineSync.questionInt("Enter 1 to delete a task , enter 2 to go back to main menu : ")
//    if(option == 1){
//        let newTaskName = readLineSync.question("Enter the new Task Name : ")
//        taskFound.todoName = newTaskName
//    }else if(option == 2){
//        let newStatus = readLineSync.question("Enter Y/yes for completed task : ")
//        if(newStatus == 'Y' || newStatus == "y" || newStatus == 'yes'){
//            taskFound.isCompleted = true
//        }
//    }else {
//        console.log("wrong input")
//        return
//    }




// function deletUser(email){
//     fs.readFile("data.json",(error,data)=>{
//         if(error) throw error
//         data=JSON.parse(data)
//         //check for duplicate email
//         const remove =data.filter((ele)=>ele.email!==email)
//         fs.writeFile("data.json", JSON.stringify(remove),(error)=>{
//             if(error) throw error;
//             console.log("user deleted successfully");
//         })
        
//     })

// }

   

   await fs.writeFile("data.json",JSON.stringify(fileData))
   console.log(chalk.bgBlackBright("User Deleted successfully"));



} catch (error) {
   console.log(error);
}
}
export default deleteUser