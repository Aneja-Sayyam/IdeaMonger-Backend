const host = window.location.hostname;
const name = document.getElementById("username");
const submit = document.getElementById("submit");

submit.addEventListener("click",()=>{
    window.sessionStorage.setItem("name",name.value);
    window.open("/chat.html","_self");
})