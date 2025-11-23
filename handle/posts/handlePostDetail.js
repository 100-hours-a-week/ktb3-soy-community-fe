import {PostCard} from "../../components/postcard/PostCard.js";
import {loadPostDetail} from "./PostEventHandler.js";

export function getPostCardWithData(postId){
    const data = loadPostDetail(postId);
    const card = PostCard(data); 
    return card;
}

// export async function handlePostDetail(postId) {
//     const modalTitleMsg = "게시글을 삭제하시겠습니까?";
//     const modalContentMsg = "삭제한 글은 복구할 수 없습니다.";

//     const data = await handlePostDetailView(postId);
//     const article = PostDetail(data); 

//     article.querySelector("#btn-post-edit")
//         .addEventListener("click", () => navigateTo(`/posts/${postId}/edit`));

//     article.querySelector("#btn-post-delete")
//         .addEventListener("click", () => handlePostDelete(modalTitleMsg, modalContentMsg, postId));

//     article.querySelector("#btn-likes")
//         .addEventListener("click", function (){ handlePostLike(this, postId)});

//     return article;
// }
