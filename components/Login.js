import {submitLogin} from "../handle/handleSubmitLogin.js"
import {handleInvalidEmail, handleInvalidPassword} from "../handle/handleLoginInvalidInput.js";
import { renderHeader } from "../utils/renderUtils.js";
export function Login(){
    const section = document.createElement("section");
    section.className = "login-box";
    section.innerHTML = `
        <h2 class = "login-box-title">로그인</h2>
        <form>
            <label>이메일</label>
            <input type="email" id = "user-email" placeholder="이메일을 입력하세요">
            <label>비밀번호</label>
            <input type="password" id = "user-password" placeholder="비밀번호를 입력하세요">
            <p class="helper-text" id="helper-text">* helper text</p>
            <button class="btn-primary" id = "btn-login" disabled>로그인</button>
        </form>
    `;

    let activeField = null; // 현재 포커스된 입력 필드 추적용

    const helperText = section.querySelector("#helper-text");
    const userEmail = section.querySelector("#user-email");
    const userPassword = section.querySelector("#user-password");
    const loginBtn = section.querySelector("#btn-login");

    userEmail.addEventListener("focus", () => (activeField = "email"));
    userPassword.addEventListener("focus", () => (activeField = "password"));

    function validateAll() {
        
        let emailValid = handleInvalidEmail(helperText, userEmail.value);
        let passwordValid = handleInvalidPassword(helperText, userPassword.value);

        // 현재 focus된 input에 따라 메시지 결정
        if (activeField === "email") {
        emailValid = handleInvalidEmail(helperText, userEmail.value);
        } else if (activeField === "password") {
        passwordValid = handleInvalidPassword(helperText, userPassword.value);
        }

        // 버튼 활성화
        loginBtn.disabled = !(emailValid && passwordValid);
    }

    userEmail.addEventListener("input", validateAll);
    userPassword.addEventListener("input", validateAll);

    loginBtn.addEventListener("click", submitLogin);

    return section;
}