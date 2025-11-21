export function FloatingButton(){
    const div = document.createElement("div");
    div.id = "postView__floatingBtn";
    div.classList.add("floatingBtn__link_to_post_create"); 
    div.innerHTML = "+";
    return div;
}