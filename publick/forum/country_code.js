// const g_country = document.getElementById("country")
// const g_number  = document.getElementById("tel")


g_country.addEventListener("change" , () => {


   let x =  g_country.value
   switch(x){
    case "Afghanistan": g_number.placeholder = "+93-"
    break
    case "Azerbaijan": g_number.placeholder = "+994-"
    break
    case "Bangladesh": g_number.placeholder = "+880-"
    break
    case " India ": g_number.placeholder = "+91-"
    break
    case "Indonesia": g_number.placeholder = "+62-"
    break
    case "Malaysia": g_number.placeholder = "+60-"
    break
    case "Myanmar": g_number.placeholder = "+95-"
    break
    case "Pakistan": g_number.placeholder = "+92-"
    break
    case "Srilanka": g_number.placeholder = "+94-"
    break
    case "Taiwan": g_number.placeholder = "+886-"
    break
    case "Nepal": g_number.placeholder = "+977-"
    break
   }
})
