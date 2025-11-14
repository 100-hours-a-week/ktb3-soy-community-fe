import { getComments } from "../../api/commentApi.js";
import { CommentItem } from "../../components/comments/CommentItem.js";

export async function attachCommentGet(list, postId){
    try{
        const commentList = await getComments(postId);
        commentList.forEach(comment => {
            const item = CommentItem(comment, postId);
            list.appendChild(item);
        })
    } catch(error) {
        console.error("댓글 조회 실패: ", error)
    }

}