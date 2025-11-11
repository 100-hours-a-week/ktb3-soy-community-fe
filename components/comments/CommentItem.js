export function CommentItem(data){
    const item = document.createElement("div");
    item.innerHTML = `
        <div class = "comment-header">
            
        
        </div>


        <p>${data.body}</p>
        <p>${data.userNickname}</p>
        <p>${data.createdAt}</p>
    `;

    return item;
}