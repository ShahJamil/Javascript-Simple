let logEmail = document.querySelector("#logEmail")
let logPassword = document.querySelector("#logPassword")
let logBtn = document.querySelector("#logBtn")
let logMsg = document.querySelector("#logMsg")


class Login {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        if (localStorage.getItem('users')) {
            this.users = JSON.parse(localStorage.getItem('users'))
        } else {
            this.users = []
        }
    }
    checkUser() {
        return this.users.find(e => e.email == this.email);
    }

    chechPassword() {
        let newUser = this.checkUser();
        if (!newUser) {
            logMsg.innerHTML = 'Bu istifadeci movcud deyil.'
        }else{
            if(newUser.password==this.password){
                localStorage.setItem("LogInUser",JSON.stringify(newUser))
                window.location.pathname='index.html'
            }else{
                logMsg.innerHTML='Bu sifre yanlisdir'
            }
        }
    }
}

logBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let user = new Login(logEmail.value, logPassword.value)
    user.chechPassword()
})
