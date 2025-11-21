export function PostItem(){
    const postItemImage = PostItemImage();
    const postItemText = PostItemText();

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
    img.class = "data";
    img.src = `https://picsum.photos/240/300`;
    return img;    
}

function PostItemText(data){
    const postItemTextLeft = PostItemTextLeft();
    const postItemTextRight = PostItemTextRight();

    const postItem = document.createElement("div");
    postItem.classList.add("text");
    postItem.appendChild(postItemTextLeft);
    postItem.appendChild(postItemTextRight);
    
    return postItem;
}

function PostItemTextLeft(){
    const postItemTextLeft = document.createElement("div");
    postItemTextLeft.classList.add("left");
    postItemTextLeft.appendChild(PostItemHashTag());
    postItemTextLeft.appendChild(PostItemContentPreview());
    return postItemTextLeft;
}

function PostItemTextRight(){
    const postItemTextRight = document.createElement("div");
    postItemTextRight.classList.add("right");
    postItemTextRight.appendChild(PostItemAuthor());
    postItemTextRight.appendChild(PostItemLogo());
    return postItemTextRight;  
}

function PostItemHashTag(){
    const p = document.createElement("p");
    p.classList.add("hashtag");
    p.innerHTML = "# 오늘 잘 먹은 것";
    return p;
}

function PostItemContentPreview(){
    const p = document.createElement("p");
    p.classList.add("preview-body");
    p.innerHTML = "글 미리보기인데 글이 길어졌을때 짧게 보이는게 중요합니다. 짜잔";
    return p;
}

function PostItemAuthor(){
    const p = document.createElement("p");
    p.classList.add("author");
    p.innerHTML = "멋쨍이";
    return p;
}

function PostItemLogo(){
    const p = document.createElement("p");
    p.classList.add("logo");
    p.innerHTML = "🍅";
    return p;
}