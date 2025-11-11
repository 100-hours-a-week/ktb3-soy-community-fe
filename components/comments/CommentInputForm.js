import { createComment } from "../../api/commentApi.js";

export function CommentInputForm(postId){
    const form = document.createElement('form');
    // form.classList.add('comment-input');

    form.innerHTML = `
        <textarea placeholder = "댓글을 남겨주세요!" required></textarea>
        <button type="submit" class="btn-primary">댓글 등록</button>`;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const commentData = {
            "commentContent": form.querySelector('textarea').value
        };

        const res = await createComment(commentData, postId);

        if (res.state == "success"){
            console.log('댓글 등록 완료');
            // window.dispatchEvent(new CustomEvent('comment-added')); // 새로고침 트리거
            form.reset();
        }
    });

    return form;
}