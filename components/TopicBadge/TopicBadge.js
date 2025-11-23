import {h} from "../../core/renderer.js";
import { createDom } from "../../core/renderer.js";

export function TopicBadge(topic){
    const node = h(
        "span", 
        {class: "badge"}, 
        topic
    );
    return createDom(node);
}