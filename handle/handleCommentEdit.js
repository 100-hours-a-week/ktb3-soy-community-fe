import { editComment } from "../api/commentApi.js";
import { handleCommentCreate } from "./handleCommentCreate.js";


export function handleCommentEdit(data, postId, commentId){
    const form = document.getElementById("comment-input-form");
    const btn = form.querySelector("#btn-comment-submit");
    const text = form.querySelector("#input-text");

    text.value = data.body;
    btn.textContent = "댓글 수정";

    form.removeEventListener("submit", handleCommentCreate)


    form.addEventListener(
        "submit", async(e) => {
            e.preventDefault();

            const newCommentData = {
                "newCommentContent": text.value 
            };

            const res = await editComment(newCommentData, postId, commentId);

            if (res){
                console.log("댓글 수정 완료");
                btn.textContent = "댓글 등록";
                form.reset();
                form.addEventListener("submit", handleCommentCreate);
            }

        }
    );



    







}