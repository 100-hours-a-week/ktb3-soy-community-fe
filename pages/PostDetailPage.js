import { CommentList } from "../components/comments/CommentList.js";
import { handlePostDetail } from "../handle/posts/handlePostDetail.js";
import {PostDetail} from "../components/posts/PostDetail.js";
import {handlePostDetailView} from "../handle/posts/handlePostDetailView.js";

export function PostDetailPage(postId) {
    const container = document.createElement("section");

    handlePostDetail(postId).then(postDetail => {
        container.appendChild(postDetail);
    });

    return container;
}
