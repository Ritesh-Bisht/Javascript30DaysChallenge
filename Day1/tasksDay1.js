// ACTIVITY 1 : Variable Declaration
var vNum = 94
console.log(` var vNum : ${vNum}`)

let lString = "Ritesh"
console.log(` let lString : ${lString}`)

// ACTIVITY 2 : Constant Declaration
const CBoolean = false;
console.log(` const CBoolean : ${CBoolean}`)

// ACTIVITY 3 : Data Types
var num = 9
var str = "Hello World"
var bool = false
var obj = {
    name :"Ritesh",
    lastName:"Bisht",
    age:1,
    eyeColor:2
}
var arr = [ 1,2,"rb",4,true,'h',6.9]

console.log(num)
console.log(str)
console.log(bool)
console.log(obj)
console.log(arr)


// ACTIVITY 4 : Reassigning Values
let v = 4
console.log(v)
v=6
console.log(v)

// ACTIVITY 5 : Understanding const
try {
    const c = 4
    console.log(`const c : ${c}`)
    c=6
} catch (error) {
    console.log(error);
}
finally{
    console.log(`Constant Can't modified `);
}

