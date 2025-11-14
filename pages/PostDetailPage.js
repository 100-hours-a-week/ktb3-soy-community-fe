import { handlePostDetail } from "../handle/posts/handlePostDetail.js";

export function PostDetailPage(postId) {
    const container = document.createElement("section");

    handlePostDetail(postId).then(postDetail => {
        container.appendChild(postDetail);
    });

    return container;
}
