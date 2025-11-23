import { h } from "../../core/renderer.js";
import { fromCreatedAt } from "../../utils/formatUtils.js";

export function PostMeta(authorNickname, authorProfileImgUrl, createdAt ){
    return h(
        "div", 
        {class: "post-meta"}, 
        h("img", {class: "author-img", src: authorProfileImgUrl}),
        h("span", {class: "author-nickname"}, authorNickname),
        h("span", {class: "date"}, fromCreatedAt(createdAt))
    );
}