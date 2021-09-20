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
//let usercomputer=getusername();
//console.log(usercomputer)

//try not to use DOCUMENT.WRITE in the future because not secure

// OR operator is denoted by ||


function Subscribe(){
    let useranswer = prompt('Would you like to subscribe to this site?')

    if (useranswer.toLowerCase() == 'yes'){
    document.write('Subscribe')
    }
}

//Subscribe();


let usergallery = parseInt(prompt('How many times in the past year have you seen an art show or been to a museum?'));

    function getgallery(){
        if (usergallery > 5){
            document.write('WOW!!')
        } else{
            document.write('Resources')
        }

    }

//getgallery();


//LECTURE 8: number guessing game
//random number generator

function randomnumber(){
    //100 is inclusive, 0 not inlcuded
    let randomnum = Math.floor(Math.random()*100) + 1;
    return "Your lucky number today is " + randomnum
}

function guessinggame(){
    correctanswer = randomnumber();
    console.log(randomnumber);
    //console.log is for testing and double checking
    let guesses = 3;
    for(let i=0; i<guesses; i++){
        //i++ add one each time
        let guessesLeft = guesses - i;
        let userGuess = parseInt(prompt('Please enter an integer between 1 and 100. You have '+ guessesLeft + ' tries left!'));
        while(userGuess<1 || userGuess>100){
            userGuess = parseInt(prompt('Try Again! Did you enter an integer between 1 and 100?'));
        }
        if(userGuess == correctanswer){
            alert('WAHOO! YOU GOT IT RIGHT!!! CONFETTI TIME');
            break;
        } else {
            alert('OOPS');
        }
    }
}

guessinggame();

function picOnPage(){
    let numberOfPic = prompt("How many art pieces do you want to see?")
    for(let i=0; i<numberOfPic; i++){
        document.write('<img src="https://news.artnet.com/app/news-upload/2020/09/CH-Pollock-Everson.jpg">')
    }
}