import { likePost, dislikePost } from "../../api/postApi.js";

export async function handlePostLike(btn, postId){
    let res;
    const userId = localStorage.getItem("userId");
    console.log(btn.classList);
    console.log(btn.classList.contains("liked"));
    if (btn.classList.contains("liked")){
        btn.classList.remove("liked");
        res = await dislikePost(postId, userId);
        console.log(res);
        btn.textContent = `좋아요 ${res.likeCount}`;
    } else {
        btn.classList.add("liked");
        res = await likePost(postId, userId);
        btn.textContent = `좋아요 ${res.likeCount}`;
    }

}