import {h} from "../../core/renderer.js";

export function TopicBadge(label, code){
    return h(
        "span", 
        {class: ["badge", code]}, 
        label
    );
}