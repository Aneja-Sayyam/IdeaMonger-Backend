const textarea = document.querySelector("#photoDescription");
const photoInput = document.getElementById("photoInput");
const photoDescription = document.getElementById("photoDescription");
const image = document.getElementById("image");
const userId = document.getElementById("userId");
const text = document.getElementById("text");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const postContainer = document.getElementById("postContainer");

let fileInput;
displayPosts();
function autoResize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

function onImageInput(event) {
  let reader;
  if (event.target.files && event.target.files[0]) {
    // reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);
    fileInput = event.target.files[0];
  }
}

function displayDetails(post) {
  image.src = post.imgSource;
  userId.innerHTML = post.userId;
  text.innerHTML = post.text;

  form.style.display = "none";
  postContainer.style.display = "flex";
}

async function submitPost() {
  const formData = new FormData();
  formData.append("imgSource", fileInput);
  formData.append("text", photoDescription.value);
  formData.append("userId", "1");
  // console.log(fileInput,photoDescription.value);
  console.log(formData)
  const response = await fetch("http://localhost:3000/api/post/createPost", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  console.log(result);
  //   displayDetails(result);
  displayPosts();
}

async function displayPosts() {
  const posts = await getPosts();
  console.log(posts);
  const postContainer = document.getElementById("postContainer");
  postsHtml = "";
  for (const post of posts) {
    postsHtml += `
    <div class="post">
        <div class="imageDisplay">
           <img src="${post.imgSource}" alt="" id="image">
       </div>
       <div class="imageDescription">
           <div class="userId" id="userId">${post.userId}</div>
           <div class="text" id="text">${post.text}</div>
       </div>
   </div>`;
  }
  postContainer.innerHTML=postsHtml;
}

function getPosts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:3000/api/post/listAll");
      const posts = await response.json();
      resolve(posts);
    } catch (error) {
      reject(error);
    }
  });
}

textarea.addEventListener("input", autoResize, false);
photoInput.addEventListener("input", onImageInput);
submit.addEventListener("click", submitPost);


