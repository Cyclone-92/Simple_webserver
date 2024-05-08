document.getElementById("rbutton").addEventListener("click", redirect);

function redirect() {
    // Call the function to post API data
    my_data();
    console.log("I'm in main");
}

async function my_data() {
    let main_url = "http://127.0.0.1:5501";

    let url = `${main_url}/forum`;
    try {
        // Make a GET request to the desired URL
        window.location.href = url;
    } catch (error) {
        console.log(error);
    }
}
