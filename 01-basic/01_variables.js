const accountId="abhi123"
let accountPassword='12334';
var acccoutMail='ab@google.com'
let accountSate;  // not declare will be treated as undefined

// accountId=1234  not allowed 
accountPassword="2345"
acccoutMail="bc@googgle.com"

/*
prefer not to use var because of block and functional scope.
*/
console.table([accountPassword,acccoutMail,accountId])