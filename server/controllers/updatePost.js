const Post = require("../models").Post;

function updatePost(post){
    return new Promise(async (resolve,reject)=>{
        try{
            const existingPost = await Post.findOne({where : {id:post.id}});
            const updatedPost = await existingPost.update(post);
            resolve(updatedPost);
        }catch(error){
            reject(error);
        }

    })
}

module.exports = updatePost;