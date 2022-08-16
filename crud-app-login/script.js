var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert("Login successfully");
        window.location = "login.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

// function loginbtn(){
//     if (this.value =="Login"){
//         this.value = "Logout";
//     }else {
//         this.value = "Login";
//     }
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

