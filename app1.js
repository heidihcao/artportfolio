console.log('Hello World!')

let username= prompt('What is your name?')
let useremail= prompt('What is your email address?')

//try not to use DOCUMENT.WRITE in the future because not secure
document.write ('<h2>Welcome '+username +'</h2>')
document.write ('Your email is ' + useremail)

if (username.toLowerCase() == 'heidi'){
    document.write ('<h2>Welcome Designer '+username +'</h2>')
} else{
    document.write ('<h2>Welcome Subscriber '+username +'</h2>')
}