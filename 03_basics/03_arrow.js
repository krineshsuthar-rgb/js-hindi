const user = {
    username: "krinesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam "
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username = "krinesh"
//     console.log(this.username);
    
// }

// chai()

// const chai  = function () {
//     let username = "krinesh"
//     console.log(this.username);
// }

// chai()

// const chai  =  () => {
//     let username = "krinesh"
//     console.log(this.username);
// }




// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>   num1 + num2

// const addTwo = (num1, num2) =>   (num1 + num2)

// const addTwo = (num1, num2) =>   ({username: "krinesh"})


// console.log(addTwo(3, 4))

// const myaArray = [2, 5, 3, 7, 8,]

// myaArray.forEach()