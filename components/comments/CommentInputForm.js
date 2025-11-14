export function CommentInputForm(){
    const div = document.createElement('div');
    div.classList.add("comment-input-form");

    div.innerHTML = `
        <textarea class="comment-textarea" placeholder="댓글을 남겨주세요!" required></textarea>
        <button type="button" id="btn-comment-submit" class="btn-comment-submit">댓글 등록</button>
    `;
    return div;
}