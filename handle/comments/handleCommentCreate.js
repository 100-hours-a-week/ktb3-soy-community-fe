import {createComment} from "../../api/commentApi.js";

export async function handleCommentCreate(event, postId, inputValue){
    event.preventDefault();

    const commentData = {
        "commentContent": inputValue
    };

    const res = await createComment(commentData, postId);

    return res;
}