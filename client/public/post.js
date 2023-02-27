const postDescription = document.getElementById("postDescription");
const postImage = document.getElementById("postImage");
const imageBtn = document.getElementById("imageBtn");
const submit = document.getElementById("submit");
const newImage = document.getElementById("newImage")
let image;
const newPostImage = document.getElementById("newPostImage");
// const mainContainer = document.getElementById("main-container");
const userId = window.sessionStorage.getItem("userId");
console.log(userId);
async function getFile(event){
  const reader = new FileReader();

  reader.onload = ()=>{
    const dataUrl = reader.result;
    newImage.src = dataUrl;
  }
    if(event.target.files && event.target.files[0]){
        image = event.target.files[0];
        reader.readAsDataURL(image);
        newPostImage.style.display = "flex";
    }
    
    // newImage.src = "../../uploads/281dbcdf-13c5-4ec4-b846-498e1642ffa7.jpg";
}

async function createPost(){
    const formData = new FormData();
    formData.append("imageSource" , image);
    formData.append("description", postDescription.value);
    formData.append("userId",userId);

    const response = await fetch("http://localhost:3000/api/post/createPost",{
        method:"POST",
        body: formData
    })
    const result = await response.json();
    displayPosts();
    location.reload();
    console.log(result);
    // newImage.src = none;
    // postDescription = "";
} 

async function displayPosts(){
    const posts = await getPosts(userId);
    let postsHtml = '';
    let i;
    for (i=(posts.length)-1;i>=0;i--){
        // console.log(post.imageSource);
        // let dataUrl;
        // const reader = new FileReader();
        // reader.onload = ()=>{
        //   dataUrl = reader.result;
        // }
        // reader.readAsDataURL(post.imageSource);
        
        // postsHtml += `
        // `;
        const div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = `<div class="postHeader">
        <div class="profile-pic"><img src="../includes/baseline_account_circle_black_18dp.png" id="profile-pic" alt=""></div>
        <span>Username</span>
      </div>
      <div class="imageContainer"><img src="${posts[i].imageSource}" id="post-image" alt="" /></div>
    
      <div class="opinion">
        <div class="icon">
          <span class="material-icons" id="upvote"> favorite_border </span>
        </div>
        <div class="icon">
          <span class="material-icons" id="comment"> comment </span>
        </div>
      </div>`;
        document.querySelector(".main-container").appendChild(div);
    }
    
}

function getPosts(id){
    const body = {"userId" : id};
    return new Promise(async (resolve,reject)=>{
        try{
            const response = await fetch("http://localhost:3000/api/post/listAllPostsByUserId",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(body)
            })
            const posts = await response.json();
            console.log(posts);
            resolve(posts);
        }catch(error){
            reject(error);
        }
    });
}

submit.addEventListener("click",createPost)
postImage.addEventListener("input",getFile)
imageBtn.addEventListener("click", ()=>{
    postImage.click();
})
displayPosts()