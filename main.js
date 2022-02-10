let email = document.getElementById("user-email");
let password = document.getElementById("user-password")



function display(){
    let gmail = email.value;
    let pass = password.value;
    if(gmail !=="" && pass !== ""){
    alert(`you're email is ${gmail}`)
    }
}