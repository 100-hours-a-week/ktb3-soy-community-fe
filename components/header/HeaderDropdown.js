import { navigateTo } from "../../core/router.js";
import { Dropdown } from "../Dropdown/Dropdown.js";

export function HeaderDropdown(){
    return Dropdown({
        placeholder: "🍅", 
        options: [
            { value: "editProfile", label: "회원 정보 수정" },
            { value: "editPassword", label: "회원 비밀번호 수정"},
            { value: "logout", label: "로그아웃"}
        ],
        className: "header_dropdown",
        clickEvents: {
            editProfile: () => navigateTo("/edit-profile"),
            editPassword: () => navigateTo("edit-password"),
            logout: () => {
                localStorage.clear();
                navigateTo("/")
            }
        }
    });
}