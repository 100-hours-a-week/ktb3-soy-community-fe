import { getPostDetail } from "../../api/postApi.js";
import { PostDetail } from "../../components/posts/PostDetail.js";

export async function handlePostDetailView(postId){
    return await getPostDetail(postId, localStorage.getItem("userId"));
}