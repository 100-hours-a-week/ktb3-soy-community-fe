import { handleCommentCreate } from "./handleCommentCreate.js";

export function handleCommentInputForm(form, postId) {
    const btn = form.querySelector("#btn-comment-submit");

    btn.addEventListener("click", async (event) => {
        const inputValue = form.querySelector("textarea").value; 
        const res = await handleCommentCreate(event, postId, inputValue);
        if (res.state){
            form.querySelector("textarea").value = "";
        }
    });
}
