import { Header } from "../components/Header.js";

export function renderHeader(){
    const existingHeader = document.querySelector("header");
    if (existingHeader) {
        existingHeader.remove();
    }
    console.log("hi");
    const newHeader = Header();
    document.body.prepend(newHeader);
}