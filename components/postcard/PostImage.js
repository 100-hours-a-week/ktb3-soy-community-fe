import {h} from "../../core/renderer.js";

export function PostImage(src) {
    if (!src) return null;
    return h("img", { class: "post-image", src });
}
