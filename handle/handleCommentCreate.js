import { createComment } from "../api/commentApi.js";

export async function handleCommentCreate(event){
    event.preventDefault();

    const commentData = {
        "commentContent": form.querySelector('textarea').value
    };

    const res = await createComment(commentData, postId);

    if (res.state == "success"){
        console.log('댓글 등록 완료');
        // window.dispatchEvent(new CustomEvent('comment-added')); // 새로고침 트리거
        form.reset();
    }
}