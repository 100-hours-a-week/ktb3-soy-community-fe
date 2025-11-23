import { CommentSection } from "../components/comments/CommentSection.js";
import { PostCard } from "../components/postcard/PostCard.js";
import { createDom } from "../core/renderer.js";
import {loadPostDetail} from "../handle/posts/PostEventHandler.js";

export function PostDetailPage(postId) {
    const container = document.createElement("section");

    let cardDom = null;
    loadPostDetail(postId).then(data => {
        console.log(data);        
        const card = PostCard(data);
        console.log(card)
        cardDom = createDom(card);
        container.appendChild(cardDom);
    });

    const commentSection = CommentSection(postId);

    container.appendChild(createDom(commentSection));



    // handlePostDetail(postId).then(postDetail => {
    //     const postCard = PostCard(postDetail);
    //     container.appendChild(postDetail);

    //     const commentList = CommentList(postId);
    //     container.appendChild(commentList);
    // });

    return container;
}