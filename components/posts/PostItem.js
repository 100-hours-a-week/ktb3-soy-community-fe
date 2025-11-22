export function PostItem(data){
    console.log(data);
    const content = data.content;
    const topicCode = data.topicCode;
    const topicLabel = data.topicLabel;
    const userNickname = data.userNickname;
    
    const postItemImage = PostItemImage();
    const postItemText = PostItemText({content, topicCode, topicLabel, userNickname});
    const div = document.createElement("div");
    div.classList.add("postItem");
    div.appendChild(postItemImage);
    div.appendChild(postItemText);
    return div;
}

function PostItemImage(){
    const postItemImageData = PostItemImageData();
    const div = document.createElement("div");
    div.classList.add("image");
    div.appendChild(postItemImageData);
    return div;    
}

function PostItemImageData(){
    const img = document.createElement("img");
    img.className = "data";
    img.src = `https://picsum.photos/240/300`;
    return img;    
}

function PostItemText({content, topicCode, topicLabel, userNickname}){
    const postItemTextLeft = PostItemTextLeft({content, topicCode, topicLabel});
    const postItemTextRight = PostItemTextRight(userNickname);

    const postItem = document.createElement("div");
    postItem.classList.add("text");
    postItem.appendChild(postItemTextLeft);
    postItem.appendChild(postItemTextRight);
    
    return postItem;
}

function PostItemTextLeft({content, topicCode, topicLabel}){
    const postItemTextLeft = document.createElement("div");
    postItemTextLeft.classList.add("left");
    postItemTextLeft.appendChild(PostItemTopicLabel(topicCode, topicLabel));
    postItemTextLeft.appendChild(PostItemContentPreview(content));
    return postItemTextLeft;
}

function PostItemTextRight(nickname){
    const postItemTextRight = document.createElement("div");
    postItemTextRight.classList.add("right");
    postItemTextRight.appendChild(PostItemAuthor(nickname));
    postItemTextRight.appendChild(PostItemLogo());
    return postItemTextRight;  
}

function PostItemTopicLabel(topicCode, topicLabel){
    const p = document.createElement("p");
    p.classList.add("label");
    p.classList.add(topicCode);
    p.innerHTML = topicLabel;
    return p;
}

function PostItemContentPreview(content){
    const p = document.createElement("p");
    p.classList.add("preview-body");
    p.innerHTML = content;
    return p;
}

function PostItemAuthor(nickname){
    const p = document.createElement("p");
    p.classList.add("author");
    p.innerHTML = nickname;
    return p;
}

function PostItemLogo(){
    const p = document.createElement("p");
    p.classList.add("logo");
    p.innerHTML = "🍅";
    return p;
}