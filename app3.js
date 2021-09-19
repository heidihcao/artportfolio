let usersee= prompt('Would you like to see more?')
if (usersee.toLowerCase() == 'yes'){
    document.write('Link to External Site <br>')
}


// OR operator is denoted by ||

let usergallery = parseInt(prompt('How many times in the past year have you seen an art show or been to a museum?'));

function getgallery(){
    if (usergallery > 5){
        document.write('WOW! You are a connoisseur!!')
    } else{
        document.write('Can we help you find you some local shows and galleries?')
    }

}

getgallery();