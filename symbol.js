// object literals in js
const mySym = Symbol("key1")//defining a symbol

const jsUser = {
    name: "anonymous",
  //mySym: "mykey1"// the common mistake here mySym isn't the symbol we defined above
    [mySym]: "mykey1",
    "full name": "Vaibhav Vishwakarma",
    age: 18,
    location: "Varanasi",
    email: "whatever@icloud.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}

// to access objects in js (common way most people know)
console.log(jsUser.name)
console.log(jsUser.age)
console.log(jsUser.location)
console.log(jsUser.email)
console.log(jsUser.isLoggedIn)
console.log(jsUser.lastLoginDays)

// another way to access objects in js (not many know about it)

console.log(jsUser.email)
console.log(jsUser["email"])//when in [] we should use string, since we are not directly seeking the email method rather the data with index "email"
// but in the case given in the following line we can't do the same
// console.log(jsUser.full name)//this would just throw out an error because full name isn't an object in jsUser
console.log(jsUser["full name"])

// now we want to use the symbol we created as a key.
console.log(jsUser.mySym)//will not ouput as a symbol 
console.log([mySym])// correct way of using symbol as a key

// you can also verify the type of mySym

console.log(typeof mySym);