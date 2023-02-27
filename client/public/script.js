const displayPictureInput=document.getElementById('displayPictureInput');
const displayPictureImg=document.getElementById('displayPicture');

displayPictureInput.addEventListener('input',onImageInput);

function onImageInput(event){
    let reader;
    // console.log(event)
    if(event.target.files && event.target.files[0]){
        reader=new FileReader();
        // console.log(event.files)
        reader.onload=(_event)=>{
            displayPictureImg.src=_event.target.result
        };
        reader.readAsDataURL(event.target.files[0]);
        console.log(event.target.files[0]);
        // uploadImage(event.target.files[0])
    }
}
   

async function uploadImage(file){
    const formData=new FormData();
    formData.append('displayPicture',file);
    formData.append('userId','123')
    const response=await fetch('/imageUpload',{
        method:'POST',
        body:formData
    });
    const result=await response.json();
    displayPictureImg.src=result.imagePath;
}