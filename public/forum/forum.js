// const { json } = require("body-parser")
// const { error } = require("console")
// const { features } = require("process")

const submit_bttn   = document.getElementById("submit_id")
const reset_bttn   = document.getElementById("reset_id")
const f_name = document.getElementById("fname")
const s_name = document.getElementById("sname")
const age    = document.getElementById("age")
const g_status = document.getElementById("status")
const g_experience = document.getElementById("experience")
const g_field = document.getElementById("field")
const g_country = document.getElementById("country")
const g_number  = document.getElementById("tel")
const email = document.getElementById("email")
const fileInput = document.getElementById("fileid")

url_prime = "http://127.0.0.1:5501"

//  post API 
async function my_data(){

    url_whole = `${url_prime}/forum_post`

    const formData  = new FormData()
    formData.append("first_name", f_name.value);
    formData.append("second_name", s_name.value);
    formData.append("age", age.value);
    formData.append("marital_status", g_status.value);
    formData.append("experience", g_experience.value);
    formData.append("field_of_work", g_field.value);
    formData.append("selected_country", g_country.value);
    formData.append("mobile_number", g_number.value);
    formData.append("email", email.value)
    formData.append("file" , fileInput.files[0]);

    try {
    const res = await fetch(url_whole , {
        method: "POST",
        mode: "no-cors",
        body: formData
    })

    const r_url = await res.text()
    console.log(`Received URL is ${r_url}`)
    window.location.assign(r_url)

    } catch (error){
    console.log(error)
    }
}


//  Event Listner

submit_bttn.addEventListener("click",check_validity)

function check_validity(e){
    const score = validity() 
    if (score == 9 ){
        my_data()
        console.log(`Score:`)
    } else {
        e.preventDefault()
    }
}

// forum validaytor

function validity(){
    let count = 0
    // Check the validity of the age 
    let A = age.value
    if (A.length){
        A = Number(A)
        if (A < 13 && A >100){
            console.log(A.match(/[a-z]/g) === null)
            count = 0
            age.style.borderColor = "red"
        }else {
            count += 1
            age.style.borderColor = "black"
        } 
    } else{
        count = 0
        age.style.borderColor = "red"
    }
    // check the validity of the mobile number
    let  N = g_number.value
    if (N.match(/[a-z]/g) === null){
        N = N.length
        if ((N === 9 || (N === 10))){
            count += 1
            g_number.style.borderColor = "black"
        }else {
            count = 0
            g_number.style.borderColor = "red"
        } 
    }else {
        count = 0
        g_number.style.borderColor = "red"
    }
    // check the first name 
    let FN = f_name.value
    if (f_name.value.length){
    if (FN.match(/[A-Z]/ig).length == FN.length){
        if (FN.length > 1){
            count += 1
            f_name.style.borderColor = "black"
        }else {
            count = 0
            f_name.style.borderColor = "red"
        } 
    }else {
        count = 0
        f_name.style.borderColor = "red"
    }
    } else {
        f_name.style.borderColor = "red"
    }
    // check the second name 
    let SN = s_name.value

    if( SN.length) {
    if (SN.match(/[A-Z]/ig).length == SN.length){
        if (SN.length > 1){
            count += 1
            s_name.style.borderColor = "black"
        }else {
            count = 0
            s_name.style.borderColor = "red"
        } 
    }else {
        count = 0
        s_name.style.borderColor = "red"
    }
    } else {
        s_name.style.borderColor = "red"
    }

    // check the validity of email
    let  E = email.value
    let E_length = E.length
    
    if (E_length){

        if (E.match(/@gmail.com/g) != null){ 
            if ( (E.match(/@gmail.com/g).length === 1) && (E.endsWith("@gmail.com")) ) {
                email.style.borderColor = "black"
                count += 1
            }else {
                email.style.borderColor = "red"
                count += 0
            }
        } else if (E.match(/@yahoo.com/g) != null){
            if ( (E.match(/@yahoo.com/g).length === 1) && (E.endsWith("@yahoo.com")) ) {
                email.style.borderColor = "black"
                count += 1
            }else {
                email.style.borderColor = "red"
                count += 0
            }
        } else if (E.match(/@hotmail.com/g) != null){
            if ( (E.match(/@hotmail.com/g).length === 1) && (E.endsWith("@hotmail.com")) ) {
                email.style.borderColor = "black"
                count += 1
            }else {
                email.style.borderColor = "red"
                count += 0
            }
        } else {
            email.style.borderColor = "red"
            count += 0
        }

    }else{
        email.style.borderColor = "red"
        count += 0
    }
    // check marital status
    if (g_status.value === "Select Maritial Status"){
        count = 0
        g_status.style.borderColor = "red"
    } else {
        count += 1
        g_status.style.borderColor = "black"
    }
    // check experience
    if (g_experience.value === "select number of years"){
        count = 0
        g_experience.style.borderColor = "red"
    } else {
        count += 1
        g_experience.style.borderColor = "black"
    }
    // check Field Work
    if (g_field.value === "Select Field"){
        count = 0
        g_field.style.borderColor = "red"
    } else {
        count += 1
        g_field.style.borderColor = "black"
    }
    // check country
    if (g_country.value === "select country"){
        count = 0
        g_country.style.borderColor = "red"
    } else {
        count += 1
        g_country.style.borderColor = "black"
    }

    return count
}


