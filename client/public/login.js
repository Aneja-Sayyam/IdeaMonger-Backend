const emailInput = document.getElementById("email");
const passwdInput = document.getElementById("passwd");
const loginBtn = document.getElementById("loginBtn");

// emailInput.value = "contactsayyam@gmail.com";
// passwdInput.value = "dsscs";

emailInput.value = "blah@gmail.com";
passwdInput.value = "qwerty";


async function authenticateUser(){
    
    const body = {"email" : emailInput.value,
    "passwd" : passwdInput.value};

    console.log(body);
    // const formData = new FormData();
    // formData.append("email", emailInput.value);
    // formData.append("passwd", passwdInput.value);
    const response = await fetch("http://localhost:3000/api/user/loginUser",{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body : JSON.stringify(body)
    });
    // console.log(response.json());
    const result = await response.json();
    console.log(result);
    window.sessionStorage.setItem("userId",result.userId);
    window.open("http://localhost:3000/client/public/post.html","_self");
    // console.log(result.userId);
    // console.log(result.access,result.userId);
}

loginBtn.addEventListener("click", authenticateUser);