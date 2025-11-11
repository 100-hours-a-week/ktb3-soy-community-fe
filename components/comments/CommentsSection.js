import { CommentList } from "./CommentList.js";
import {CommentInputForm} from "./CommentInputForm.js";

export function CommentsSection(postId){
    const section = document.createElement("section");
    // section.classList.add('comments-section');

    const form = CommentInputForm(postId);
    const list = CommentList(postId);

    section.appendChild(form);
    section.appendChild(list);

    return section;
}