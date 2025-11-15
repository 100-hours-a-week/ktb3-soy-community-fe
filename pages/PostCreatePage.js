import { PostsCreate } from "../components/posts/PostsCreate.js";
import {attachPostCreate} from "../handle/posts/handlePostCreate.js";

export function PostCreatePage(){
    const postCreate = PostsCreate();
    attachPostCreate(postCreate);

    const div = document.createElement("div");
    div.appendChild(postCreate);
    return div;
}
