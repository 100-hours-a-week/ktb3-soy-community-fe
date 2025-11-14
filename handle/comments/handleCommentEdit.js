import { editComment } from "../../api/commentApi.js";

let createHandler = null;
let editHandler = null;

export function handleCommentEdit(item, postId, commentId){
    const form = document.getElementById("comment-input-form");
    const btn = form.querySelector("#btn-comment-submit");
    const text = form.querySelector(".comment-textarea");
    const commentContent = item.querySelector(".comment-body").textContent;

    console.log(commentId);

    text.value = commentContent;
    btn.textContent = "댓글 수정";
    btn.addEventListener("click", (event) => editHandler(event));

    editHandler = async (event) => {
        event.preventDefault();

        const newCommentData = {
            newCommentContent: text.value
        };

        const res = await editComment(newCommentData, postId, commentId);
        if (res){
            item.querySelector(".comment-body").textContent = text.value;

            /*댓글 작성 모드로 바꾸기*/
            btn.textContent = "댓글 작성";
            text.value = "";
        }
    };
}