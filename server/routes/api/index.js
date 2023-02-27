const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API." });
});

// User Routes

router.post("/user/createUser", require("./createUser"));
router.post("/user/getUserDataById", require("./getUserDataById"));
// router.post("/user/findUserByEmail",require("./findUserByEmail"));
router.post("/user/removeUserById", require("./removeUserById"));
router.post("/user/updateUserById", require("./updateUserById"));
router.post("/user/loginUser", require("./loginUser"));
router.post("/user/getUsername", require("./getUsername"));
router.post("/user/follow", require("./followUser"));
router.post("/user/unfollow", require("./unfollowUser"));
router.post("/user/search", require("./searchUsersByName"));
router.post("/user/getFollowersFollowings", require("./getFollowersFollowings"));
// Profile Routes

router.post("/profile/createProfile", require("./createProfile"));
router.post("/profile/findProfileById", require("./findProfileById"));
router.post("/profile/removeProfileById", require("./removeProfileById"));
router.post("/profile/getProfileImageByUserId",require("./getProfileImageByUserId"));
router.post(
  "/profile/updateProfileById",
  upload.any(),
  require("./updateProfileById")
);

// Post Routes

router.post("/post/listAllPostsByUserId", require("./listAllPostsByUserId"));
router.post("/post/createPost" ,upload.any(), require("./createPost"));
router.post("/post/findPostById", require("./findPostById"));
router.post("/post/removePostById", require("./removePostById"));
router.post("/post/updatePostById", require("./updatePostById"));
router.post("/post/likePost", require("./likePost"));
router.post("/post/unlikePost", require("./unlikePost"));

router.post("/post/createPostComment", require("./createPostComment"));
router.post("/post/removePostComment", require("./removePostComment"));

// Event Routes

router.post("/event/createEvent", upload.any(), require("./createEvent"));
router.get("/event/findEvents", require("./findEvents"));

// Chat Routes
router.post("/chat/getOldChats", require("./getOldChats"));
module.exports = router;