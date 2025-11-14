import { handleCommentCreate } from "./handleCommentCreate.js";
import { CommentItem } from "../../components/comments/CommentItem.js";
import { attachCommentEvents } from "./handleCommentItemEdit.js";
import { editComment } from "../../api/commentApi.js";

let activeHandler = null;

export function attachCommentInputForm(list, form, postId){
    const btn = form.querySelector("#btn-comment-submit");
    const textarea = form.querySelector("textarea");

    const createEventHandler = async (event) => {
        event.preventDefault();

        const inputValue = textarea.value; 
        if (!inputValue) return;

        const res = await handleCommentCreate(event, postId, inputValue);
        if (res.state){
            const newCommentItem = CommentItem(res, postId);
            attachCommentEvents(newCommentItem, postId, res.id);
            list.appendChild(newCommentItem);
            textarea.value = "";
        }
    }

    activeHandler = createEventHandler;
    btn.addEventListener("click", activeHandler);

    form.enterEditMode = (item, commentId) => {
        const commentBody = item.querySelector(".comment-body").textContent;
        
        btn.removeEventListener("click", activeHandler);

        textarea.value = commentBody;
        btn.textContent = "댓글 수정";

        const editEventHandler = async (event) => {
            event.preventDefault();
    
            const newCommentData = {
                newCommentContent: textarea.value
            };
    
            const res = await editComment(newCommentData, postId, commentId);
            if (res){
                item.querySelector(".comment-body").textContent = textarea.value;
    
                /*댓글 작성 모드로 바꾸기*/
                textarea.value = "";
                btn.textContent = "댓글 작성";
                
                btn.removeEventListener("click", activeHandler);
                activeHandler = createEventHandler;
                btn.addEventListener("click", activeHandler);
            }
        };

        activeHandler = editEventHandler;
        btn.addEventListener("click", activeHandler);

    }
}