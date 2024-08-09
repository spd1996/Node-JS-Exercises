// What is the out of each of the blocks ? Why ?

for(var i = 0; i < 5 ; i++){
    setTimeout(() => {
        console.log(i)
    }, 2000);
}

// ans --> five times 5 i.e all 5

for(let i = 0; i < 5 ; i++){
    setTimeout(() => {
        console.log(i)
    }, 2000);
}

// ans --> 0, 1, 2, 3, 4

console.log('start')
setTimeout(() => {
    console.log('setTimeout callback')
}, 0);

Promise.resolve().then(()=>{
    console.log('Promise resolved')
})
console.log('end')


// ans --- >
// start
// end
// Promise resolved
// setTimeout callback

console.log(myVar)
setTimeout(function(){
    myVar = 5
    console.log(myVar)
}, 2000)
var myVar

// ans ---> first Undefinded and then 5

const arr = [1, 3, 5, 6]

const shallowCopy = arr
const deepCopy1 = Array.from(arr)
const deepCopy2 = [...arr]

shallowCopy.push(3)
arr.push(4)
deepCopy1.push(9)
console.log(shallowCopy)
console.log(deepCopy1)
console.log(arr)
console.log(deepCopy2)
