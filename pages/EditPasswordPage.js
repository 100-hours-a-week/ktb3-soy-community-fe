import {EditPassword} from "../components/EditPassword.js"

export function EditPasswordPage(){
    const div = document.createElement("div");
    const section = EditPassword();
    div.appendChild(section);
    return div;
}