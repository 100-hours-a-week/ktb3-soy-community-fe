import { PostItemContainer } from "../components/posts/PostItemContainer.js";
import {Header} from "../components/header/Header.js";
import { Banner } from "../components/banner/Banner.js";
import { tmpAttachPostListEvents, attachPostListEvents } from "../handle/posts/handlePostListEvents.js";
import { FloatingButton } from "../components/FloatingButton.js";

export function PostListPage(){
    const header = Header();
    const banner = Banner();
    const postItemContainer = PostItemContainer();
    tmpAttachPostListEvents(postItemContainer);
    const floatingBtn = FloatingButton();

    const postListMain = document.createElement("div");
    postListMain.classList.add("postListMain");
    postListMain.appendChild(banner);
    postListMain.appendChild(postItemContainer);
    postListMain.appendChild(floatingBtn);

    const postListPage = document.createElement("div");
    postListPage.append(header);
    postListPage.append(postListMain);

    return postListPage;
}