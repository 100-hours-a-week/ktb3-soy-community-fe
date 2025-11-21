import { navigateTo } from "../../core/router.js";

export function SignUpLink(){
    const div = document.createElement("div");
    div.classList.add("login__signup_link_to");
    div.innerHTML = `회원 가입 하러가기`;
    div.onclick = () => navigateTo("/signup");
    return div;
}