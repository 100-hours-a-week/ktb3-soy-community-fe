import { SignUpLink } from "../components/SignUpLink.js";
import { Login } from "../components/Login.js";
import { Header } from "../components/header.js";

export function LoginPage(){
    const login = Login();
    const signUpLink = SignUpLink();

    const div = document.createElement("div");
    div.appendChild(login);
    div.appendChild(signUpLink);

    return div;

}