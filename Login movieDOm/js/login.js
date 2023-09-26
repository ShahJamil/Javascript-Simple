let homePage = document.querySelector(".homePage")
let loginContainer = document.querySelector(".loginContainer")
let resgisterContainer = document.querySelector(".resgisterContainer")
let go_login = document.querySelector("#go_login")
let go_register = document.querySelector("#go_register")

let login_btn = document.querySelector("#login_btn")
let log_error = document.querySelector("#log_error")
let log_pass = document.querySelector("#log_pass")
let log_email = document.querySelector("#log_email")
let log_email_error = document.querySelector("#log_email_error")
let log_pass_error = document.querySelector("#log_pass_error")

let reg_btn = document.querySelector("#reg_btn")
let reg_error = document.querySelector("#reg_error")
let log_r_pass = document.querySelector("#log_r_pass")
let reg_pass = document.querySelector("#reg_pass")
let reg_email = document.querySelector("#reg_email")
let reg_name = document.querySelector("#reg_name")

go_login.addEventListener('click', () => {
    homePage.style.display = 'none'
    loginContainer.style.display = 'flex'
    resgisterContainer.style.display = 'none'
})
go_register.addEventListener('click', () => {
    homePage.style.display = 'none'
    loginContainer.style.display = 'none'
    resgisterContainer.style.display = 'flex'
})
let users = [];
if (localStorage.getItem('sinemaUsers')) {
    users = JSON.parse(localStorage.getItem('sinemaUsers'))
}
reg_btn.addEventListener('click', () => {
    reg_error.style.color = 'red';
    if (reg_name.value == "" || reg_email.value == "" || reg_pass.value == "" || log_r_pass.value == "") {
        reg_error.innerHTML = 'Bosluqlari doldurun!'
    } else if (reg_pass.value != log_r_pass.value) {
        reg_error.innerHTML = 'Sifreler eyni deyil!'
    } else {
        let checkUser = users.find(e => e.email == reg_email.value)
        if (checkUser) {
            reg_error.innerHTML = 'Bu istifadeci movcuddur!';
        } else {
            let newUser = {
                id: users.length + 1,
                name: reg_name.value,
                email: reg_email.value,
                password: reg_pass.value,
                return_password: log_r_pass.value
            }
            users.push(newUser);
            localStorage.setItem('sinemaUsers', JSON.stringify(users));
            reg_name.value = '';
            reg_email.value = '';
            reg_pass.value = '';
            log_r_pass.value = '';
            reg_error.innerHTML = '';
            window.location = 'index.html'
        }
    }
})

login_btn.addEventListener('click', () => {
    log_error.style.color = "red";
    if (log_email.value == "") {
        log_email_error.innerHTML = "Email daxil edin"
    } else {
        log_email_error.innerHTML = ""
    }
    if (log_pass.value == "") {
        log_pass_error.innerHTML = "sifre daxil edin"
    }else {
        let checkUser = users.find(e => e.email == log_email.value);
        if (!checkUser) {
            log_error.innerHTML = 'Bu istifadeci movcud deyil';
        } else if (checkUser.password != log_pass.value) {
            log_error.innerHTML = "bu sifre duzgun deyil";
        } else {
            window.location = 'index.html'
            log_email.value = '';
            log_pass.value = '';
            log_error.innerHTML = '';
        }
    }
})