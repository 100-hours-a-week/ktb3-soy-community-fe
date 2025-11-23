import {HeaderDropdown} from "./HeaderDropdown.js"

export function Header() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.id = "header";

    header.appendChild(HeaderTitle());
    header.appendChild(HeaderDropdown());

    return header;
}

function HeaderTitle(){
    const title = document.createElement("h1");
    title.class = "header__title";
    title.innerHTML = "Dancing Tomato Club";
    return title;
}