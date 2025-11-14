import { CommentItem } from "./CommentItem.js";
import { getComments } from "../../api/commentApi.js";
import { CommentInputForm } from "./CommentInputForm.js";
import { attachCommentInputForm } from "../../handle/comments/handleCommentInputForm.js";
import {attachCommentGet} from "../../handle/comments/handleCommentGet.js";

export function CommentList(postId){
    const list = document.createElement("div");
    list.classList.add("comment-list");

    const inputForm = CommentInputForm();
    attachCommentInputForm(list, inputForm, postId);
    list.appendChild(inputForm);

    attachCommentGet(list, postId);

    return list;
}