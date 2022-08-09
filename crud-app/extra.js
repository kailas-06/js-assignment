window.onload = () => {
    this.sessionStorage.setItem("username", "admin");
    this.sessionStorage.setItem("password", "admin")
}

var input = document.getElementsByTagName('input');
var login = document.getElementById('login');
var form = document.querySelector('form');

form.onsubmit = () => { return false; }

login.onclick = () => {
    if ((input[0].value != "") && (input[1].value != "")) {
        if ((input[0].value == sessionStorage.getItem("username")) && (input[1].value == sessionStorage.getItem("password"))) {
            // form.onsubmit = () =>{return 1}
            document.cookies = "username" + input[0].value;
            document.cookies = "password" + input[0].value;

        }
    } else {
        if ((input[0].value != sessionStorage.getItem("username"))) {
            input[0].nextElementSibling.textContent = "Username not match";
            setTimeout(() => {
                input[0].nextElementSibling.textContent = "";
            }, 2000);
        }
        if (input[1].value == "") {
            input[1].nextElementSibling.textContent = "Password is empty";
            setTimeout(() => {
                input[1].nextElementSibling.textContent = "";
            }, 2000);
        }
    }
}

// form validation

// function validate(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if(username == "admin" && password == "admin"){
//         alert("login successfully");
//         return true;
//     }
//     else{
//         alert("login failed")
//     }
// }



var attempt = 3;
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert("Login successfully");
        window.location = "login.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;
        alert("You have left " + attempt + " attempt;");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("login").disabled = true;
            return false;
        }
    }
}


// function loginbtn(){
//     if (this.value =="Login") this.value = "Logout";
//     else this.value = "Login";
// }

function toggle(ele) {
    var tx = document.getElementById('more-city');
    if (tx.style.display == 'block') {
        tx.style.display = 'none';

        document.getElementById(ele.id).value = 'View More';
    }
    else {
        tx.style.display = 'block';
        document.getElementById(ele.id).value = 'View Less';
    }
}




