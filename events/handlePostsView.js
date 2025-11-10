import { PostLists } from "../components/PostList.js";
import {getPosts} from "../api/postApi.js";

export async function handlePostsView(currentPage, page_size){
    try{
        const data = await getPosts(currentPage, page_size);
        // const data = await res.json(); // 이건 왜 await가 필요하지?
        const posts = data.postItemResponseList;

        const postList = PostLists(posts);
        const domPostList = document.getElementById("post-list");
        // postListContainer.innerHTML = "";          // 기존 목록 초기화
        domPostList.appendChild(postList);
    } catch (err) {
    console.error("게시글 목록 조회 실패:", err);
  }
}