var defaultUsers = [
    {
        email: "admin@gmail.com",
        password: "admin", 
    },
    {
        email: "junior@gmail.com",
        password: "password", 
    },
]

var allUsers = []
allUsers.push(...defaultUsers)







function register(event){
    event.preventDefault()

    //post user data 
    // alert("signUp auth run... ")
    console.log("dumping user data... ")
    var user_email = document.querySelector(".authInput #email").value
    var user_password = document.querySelector(".authInput #password").value
    var prompt = document.querySelector(".prompt")

    //check if user enterd a valid email and password
    var notValid = (user_email.length == 0) || (user_password == 0)
    if(notValid){
        console.log("Not valid check email and password..")

    }else{
        // add email and password to users
        var userInfo = {email: user_email, password: user_password}
        allUsers.push(userInfo)
        console.log(allUsers)
        // alert("registration success")
        prompt.style.opacity = "1"
        
    }

}



function login(event){
    event.preventDefault()
    // getting user login info
    var email = document.querySelector(".authInput #email").value
    var password = document.querySelector(".authInput #password").value
    // alert(password)
    allUsers.push(...defaultUsers)

    console.log(email == allUsers[0].email)

    // authenticate user 
    for(i = 0; i < allUsers.length; i++){
        if(email == allUsers[i].email && password == allUsers[i].password){
            alert("login successful...")
            window.location.href = "index.html"
            return
        }
    }

    alert("Incorrect credentials...")
}


//file upload 

function upload(event){
    event.preventDefault();
    document.querySelector("input[type=file]").click();
    return
};
