import {h} from "../../core/renderer.js";

import {CommentHeader} from "./CommentHeader.js";

export function CommentItem(data) {
    return h(
        "div", 
        {class: "commentItem"}, 
        CommentHeader(data),
        h("p", {class: "commentBody"}, data.body),
        h("button", {class: "btnEdit"}, "수정"), 
        h("button", {class: "btnDelete"}, "삭제")
    )
}
