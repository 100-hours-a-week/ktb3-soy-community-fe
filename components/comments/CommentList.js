import { CommentItem } from "./CommentItem.js";
import { getComments } from "../../api/commentApi.js";
import { CommentInputForm } from "./CommentInputForm.js";
import { handleCommentInputForm } from "../../handle/comments/handleCommentInputForm.js";

export function CommentList(postId){
    const list = document.createElement("div");
    list.classList.add("comment-list");

    const inputForm = CommentInputForm();
    handleCommentInputForm(inputForm, postId);
    list.appendChild(inputForm);

    getComments(postId).then(
        commentLists => {
            console.log(commentLists)
            commentLists.forEach(comment => {
                const item = CommentItem(comment, postId);
                list.appendChild(item);
            })
        }
    )


    return list;
}