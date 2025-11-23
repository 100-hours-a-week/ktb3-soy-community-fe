import { TopicBadge } from "../TopicBadge/TopicBadge.js";
import { PostContent } from "./PostContent.js";
import {PostImage} from "./PostImage.js";
import { PostMeta } from "./PostMeta.js";
import {PostStats} from "./PostStats.js";

import {h} from "../../core/renderer.js";

export function PostCard(data){
    return h(
        "div", 
        {class: "post-card"}, 
        TopicBadge(data.topicLabel, data.topicCode),
        PostImage(data.imgUrl),
        PostContent(data.content),
        PostStats({
            like: data.statsLikeCounts, 
            comment: data.statsCommentCounts, 
            view: data.statsViewCounts}),
        PostMeta(data.userNickname, data.userProfileImgUrl, data.createdAt)
    )
}