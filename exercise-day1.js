//1. Callbacks practice
//a> Write a function addNumbers that takes two numbers as arguments and a callback function. 
//The function should add the two numbers and pass the result to the callback function.
//b> Use the addNumbers function to add 5 and 10, then log the result to the console inside the callback function.


function addNumbers(a, b, f){
    const res = a + b
    f(res)
}
addNumbers(5, 10, (r)=>{
    console.log(r)
})

//2. Callbacks practice:
//a> Write a function getUserData that simulates fetching user data from a database. It should take a user ID and a
//callback function. The callback function should receive the user data as an object {id, name, email}.


function getUserData(id, f){
    setTimeout(()=>{
        const userData = {
            id,
            name: 's',
            email: 'e'
        }
        f(userData)
    }, 3000)
}

//b> Implement a function that logs the user data to the console once its received.


function logUserData(id){
    getUserData(id, (r)=>{
        console.log('User data: ', r)
    })
}

logUserData(7)

//3.Promises practice:
//a> Write a function fetchData that return a Promise. 
//The promise should resolve after 2 seconds with a message "Data fetched Successfully!"
//b> Use the fetchData function and then log the resolved message to the console.


function fetchDataPromise(){ 
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched Successfully!")
        }, 2000)
    })
}
fetchDataPromise().then((r)=>{
    console.log(r)
})