import { handleCommentCreate } from "./handleCommentCreate.js";
import { CommentItem } from "../../components/comments/CommentItem.js";
export function attachCommentInputForm(list, form, postId) {
    const btn = form.querySelector("#btn-comment-submit");

    btn.addEventListener("click", async (event) => {
        const inputValue = form.querySelector("textarea").value; 
        const res = await handleCommentCreate(event, postId, inputValue);
        console.log(res);
        if (res.state){
            list.appendChild(CommentItem(res, postId));
            form.querySelector("textarea").value = "";
        }
    });
}
