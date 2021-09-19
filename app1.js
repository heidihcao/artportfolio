console.log('Hello World!')

let username= prompt('What is your name?')

function getusername(){
    if (username.toLowerCase() == 'heidi'){
        document.write ('<h2>Welcome Designer '+username +'</h2>');
    } else{
        document.write ('<h2>Welcome Stranger '+username +'</h2>');
    }
    let usercomputer = 'Macbook Pro'
    return usercomputer;
}

//what happens inside the function stays in the function, unless you send it out the function using RETURN command
//see let usercomputer code above


//this line below is CALLING the function
let usercomputer=getusername();
console.log(usercomputer)

//try not to use DOCUMENT.WRITE in the future because not secure
