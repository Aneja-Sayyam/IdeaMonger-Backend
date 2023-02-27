const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const passwd = document.getElementById("passwd");
const countryCode = document.getElementById("countryCode");
const phoneNumber = document.getElementById("phoneNumber");
const signUp = document.getElementById("signUpBtn");
const accountInfo = document.getElementById("accountInfo");
const profileInfo = document.getElementById("profileInfo");
const website = document.getElementById("website");
const sex = document.getElementById("sex");
const highSchool = document.getElementById("highSchool");
const college = document.getElementById("college");
const expertise = document.getElementById("expertise");
const languages = document.getElementById("language");
const skills = document.getElementById("skills");
const job = document.getElementById("job");
const profileBtn = document.getElementById("profileBtn");

function getProfile(userId){
    accountInfo.style.display = "none";
    profileInfo.style.display = "flex";
    profileBtn.addEventListener("click" , function(){
        createProfile(userId);
    })    
}

async function createProfile(userId){
    
    const body = {
        "website" : website.value,
        "sex" : sex.value,
        "highSchool" : highSchool.value,
        "college" : college.value,
        "fieldOfExpertise" : expertise.value,
        "languages" : languages.value,
        "skills" : skills.value,
        "job" : job.value,
        "userId" : userId
    }

    const response = await fetch("http://localhost:3000/api/profile/createProfile",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body : JSON.stringify(body)
    })
    const result =(await response).json();
    console.log(result);
}

async function createUser(){
    
    const body = {
        "firstName" : firstName.value,
        "lastName" : lastName.value,
        "email" : email.value,
        "passwd" : passwd.value,
        "countryCode" : countryCode.value,
        "phoneNumber" : phoneNumber.value
    }
    
    console.log(body);
    const response = await fetch("http://localhost:3000/api/user/createUser",{
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body : JSON.stringify(body)
    })
    const result = await response.json();
    // if (result.access === '')
    console.log(result);
    getProfile(result.userId);
}


signUp.addEventListener("click" , createUser);