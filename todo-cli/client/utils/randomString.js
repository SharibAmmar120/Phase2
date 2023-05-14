function randomStringGenerator(size){
    const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charLength = characters.length;//Length of all characters

    let result = ''
    for(let i = 0; i <size ; i++){
        let index = Math.floor(Math.random()*charLength)
        result += characters[index]
        //result +=characters[Math.random()*charLength]
    }
    // console.log(result)
    return result
}

// randomStringGenerator(10)

export default randomStringGenerator