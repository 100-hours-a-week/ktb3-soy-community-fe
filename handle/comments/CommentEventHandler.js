import { getComments } from "../../api/commentApi.js";
import { CommentItem } from "../../components/Comments/CommentItem.js";

class CommentEventHandler{
    constructor(){}

    loadCommentList(postId){
        let commentItemList = []
        const comments = getComments(postId).then(commentList => {
            console.log(commentList);
            commentList.forEach(data => {
                const item = CommentItem(data);
                commentItemList.push(item);
            });
        }).catch(error => console.error(error));
        console.log(commentItemList);

        return commentItemList;
    }

}

const commentEventHandler = new CommentEventHandler();
export const loadCommentList = commentEventHandler.loadCommentList.bind(commentEventHandler);