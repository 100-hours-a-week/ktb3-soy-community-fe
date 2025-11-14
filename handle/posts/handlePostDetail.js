import { handlePostDetailView } from "./handlePostDetailView.js";
import { handleDeletePosts } from "../../handle/posts/handlePostDelete.js";
import {handlePostLike} from "../../handle/posts/handlePostLike.js"
import { PostDetail } from "../../components/posts/PostDetail.js";
import { navigateTo } from "../../router/router.js";

export async function handlePostDetail(postId) {
    const modalDeleteMsg = "게시글을 삭제하시겠습니까?";

    const data = await handlePostDetailView(postId);
    const article = PostDetail(data); 

    article.querySelector("#btn-post-edit")
        .addEventListener("click", () => navigateTo(`/posts/${postId}/edit`));

    article.querySelector("#btn-post-delete")
        .addEventListener("click", () => handleDeletePosts(modalDeleteMsg, postId));

    article.querySelector("#btn-likes")
        .addEventListener("click", function (){ handlePostLike(this, postId)});

    return article;
}
