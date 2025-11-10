import { getPosts } from "../api/postApi.js";
import { handlePostsView } from "../events/handlePostsView.js";
import { navigateTo } from "../router/router.js";

const src_default_user_profile = "../images/default_user_profile.png";
const default_size = 20;
let currentPage = 0;
let noMorePage = false;
let postList = document.getElementById('post-list');


export function Posts(posts){
    const section = document.createElement("section");
    section.className = "post";
    section.innerHTML = 
    `
        <div class="post-header">
        <p>
          안녕하세요.<br>
          아무말 대잔치 <strong>게시판</strong>입니다.
        </p>
        <button class="button" id="post-create-btn"> 게시글 작성 </button>
        </div>
    
        <div id="post-list"></div>

        <button class="float-button">+</button>
    `;

    handlePostsView(currentPage, default_size);
    currentPage++;


    window.addEventListener('scroll', () => {
        if (noMorePage) return;

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            handlePostsView();
        }

        const writeBtn = document.querySelector(".button");
        const floatBtn = document.querySelector(".float-button");

        const rect = writeBtn.getBoundingClientRect();
        
        if (rect.bottom < 0) {
            floatBtn.classList.add("show");
        } else {
            floatBtn.classList.remove("show");
        }
        });

    
    section.querySelector("#post-create-btn").addEventListener("click", 
      () => navigateTo("/posts/create")
    );

    
    return section;
}