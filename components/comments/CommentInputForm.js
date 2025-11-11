import { handleCommentCreate } from "../../handle/handleCommentCreate.js";

export function CommentInputForm(postId){
    const form = document.createElement('form');
    form.id = "comment-input-form";
    // form.classList.add('comment-input');

    form.innerHTML = `
        <textarea id="input-text" placeholder = "댓글을 남겨주세요!" required></textarea>
        <button type="submit" id="btn-comment-submit" class="btn-primary">댓글 등록</button>`;

    form.addEventListener('submit', handleCommentCreate);

    return form;
}