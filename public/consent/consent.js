

const fb = document.getElementById("fb")
const google = document.getElementById("google")

fb.addEventListener("click" , () => {
    console.log("fb clicked")
    call_back()

})

async function call_back(){
    let main_url = "http://127.0.0.1:5501"
    // let main_url = "http://127.0.0.1:5501"

    let url = `${main_url}/login`
    try {
    const res = await fetch(url,{
        method: "GET",
        mode: "no-cors",
        headers: {
            'Content-Type': "application/json"
        }
    }
    )
    const r_url = res.url
    console.log(r_url)
    window.location.assign(r_url)
    } catch (error){
    console.log(error)
    }
}