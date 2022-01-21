localStorage.setItem("tp3Cookies",JSON.stringify({"email":"gic@gmail.com", "pwd":"Gic123"}));
var acc = JSON.parse(localStorage.getItem("tp3Cookies"));
console.log(acc.email);
console.log(acc.pwd);

function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // console.log(email, password);
    if(acc.email === email && acc.pwd === password){
        document.getElementById("wrapper").innerHTML = "";
        document.getElementById("wrapper").innerHTML = 
            `<div class="content">
                <h1>Welcome to Home Page</h1>
                <p>You will be automatically logged out</p>
                <p>Keep refreshing your page</p>
                <button>Logout</button>
            </div>`
    }
}
function logout(){
    
}

