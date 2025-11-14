import { handlePostDetailView } from "./handlePostDetailView.js";
import { PostEdit } from "../../components/posts/PostEdit.js";
import { handlePostEdit } from "./handlePostEdit.js";
import {navigateTo} from "../../router/router.js";

export async function handlePostEditView(postId) {
    const data = await handlePostDetailView(postId);
    const article = PostEdit(data);

    const btnPostEdit = article.querySelector("#btn-post-edit");
        btnPostEdit.addEventListener("click", async (event) => {
        handlePostEdit(event, postId);
        navigateTo(`/posts/${postId}`);
    });

    return article;
}