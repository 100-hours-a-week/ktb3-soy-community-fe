import { getPostDetail } from "../../api/postApi.js";

class PostEventHandler{
    constructor(){}

    loadPostDetail(postId){
        const userId = localStorage.getItem("userId");
        return getPostDetail(postId, userId).then(data => data)
        .catch(error => {
            console.error(error)
        });
    }
}

const postEventHandler = new PostEventHandler();
export const loadPostDetail = postEventHandler.loadPostDetail.bind(postEventHandler);