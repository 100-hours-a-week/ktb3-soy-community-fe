import { handleDeleteComments } from "../../handle/handleDeleteComments.js";


export function CommentItem(data, postId){
    const modalDeleteMsg = "댓글을 삭제하시겠습니까?";
    console.log(data);
    const commentId = data.id;
    const item = document.createElement("div");
    item.innerHTML = `
        <div class = "comment-header">
        </div>

        <p>${data.body}</p>
        <p>${data.userNickname}</p>
        <p>${data.createdAt}</p>

        <button>수정</button>
        <button id="btn-comment-delete">삭제</button>
    `;

    const btnCommentDelete = item.querySelector("#btn-comment-delete");
    btnCommentDelete.addEventListener("click", () => handleDeleteComments(modalDeleteMsg, postId, commentId));

    return item;
}