const tinderUser = {}  // object declaration
console.log(tinderUser);

// object initialization

tinderUser.id = "123abc"
tinderUser.name = "Raun"
tinderUser.isLogin = false
console.log(tinderUser)

//  object declaration & initialization together
const regularUser = {
    email : "raun@gmail.com",
    fullname : {                  // nested object
        userFullname : {
            firstname : "Raunak",
            lastname : "kumar"
        }
    }
}

console.log(regularUser.fullname.userFullname)


// store objects in a single object

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 2:"b"}

const obj3 = {obj1, obj2}
console.log(obj3)

// store objects in a single object
const obj4 = Object.assign(obj1, obj2)
console.log(obj1, obj2) // 1st method to print
console.log({}, obj1, obj2) // 2nd method to print

// store objects in a single object
const obj5 ={...obj1, ...obj2}
console.log(obj5)