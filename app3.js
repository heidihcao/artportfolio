let usersee= prompt('Would you like to see more?')
if (usersee.toLowerCase() == 'yes'){
    document.write('Link to External Site')
}

let usernumberanswer = parseInt(prompt('Please enter your favorite number between 1-9'));

function getusernumberonetonine(){
    if (usernumberanswer > 9 || usernumberanswer < 0) {
        usernumberanswer = parseInt(prompt('Hmhmhm...you might have made an error!'))
    }
}
getusernumberonetonine ();

// OR operator is denoted by ||