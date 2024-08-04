// 4. Promises practice
// a> Modify the getUserData function from the previous exercise to return a Promise instead of a using a callback.
// The Promise should resolve with the user data object {id, name, email}.
// b> Implement error handling using .catch to log an error message if the Promise is rejected.

function getUserData(id){
    const userData = {
            id,
            name: 's',
            email: 'e'
        }
    const userDataPromise = new Promise((resolve, reject)=>{
        if(id){
            resolve(userData)
        } else {
            reject('User Undefined')
        }
    })
    return userDataPromise
}

// promise resolved
getUserData(6).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})


// promise rejected
getUserData().then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

// 5. Async/Await with Promises:
// a. Implement a function fetchUserData that simulates fetching user data from a database asynchronously
// using a promise.
// b. Then, create a function processUserData that takes a user ID as input, fetches the user data using fetchUserData
// and processes it.
// Note: Use async/await for both functions

