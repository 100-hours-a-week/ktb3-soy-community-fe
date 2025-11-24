import {PostCard} from "../../components/postcard/PostCard.js";
import {loadPostDetail} from "./PostEventHandler.js";

export function getPostCardWithData(postId){
    const data = loadPostDetail(postId);
    const card = PostCard(data); 
    return card;
}

