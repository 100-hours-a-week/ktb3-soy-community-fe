import { handlePostListView } from "./handlePostListView.js";
import { navigateTo } from "../../core/router.js"
import { PostItem } from "../../components/posts/PostItem.js";

const DEFAULT_SIZE = 5;

export function tmpAttachPostListEvents(section){
    for (let i = 0; i < 100; i ++){
        section.appendChild(PostItem());
    }
}


export async function attachPostListEvents(section){
    let currentPage = 0;
    let isMore = true;
    const postList = section.querySelector("#postView__postItemContainer");

    handlePostListView(postList, currentPage, DEFAULT_SIZE);
    currentPage++;

}

export function createEvent(){
        const createBtn = section.querySelector("#postView__floatingBtn");
    createBtn.addEventListener("click", () => navigateTo("/posts/create"));
    
}