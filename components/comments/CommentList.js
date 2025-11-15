import { CommentInputForm } from "./CommentInputForm.js";
import { attachCommentInputForm } from "../../handle/comments/handleCommentInputForm.js";
import { renderComments } from "../../handle/comments/handleCommentGet.js";

export function CommentList(postId){
    const list = document.createElement("div");
    list.classList.add("comment-list");

    const inputForm = CommentInputForm();
    attachCommentInputForm(list, inputForm, postId);
    list.appendChild(inputForm);

    renderComments(list, postId);

    return list;
}