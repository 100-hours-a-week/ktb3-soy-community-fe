export function Login() {
    const section = document.createElement("section");

    section.innerHTML = `
        <div class="login__title" id="login__title">멋쟁이 토마토</div>

        <div class="login__field" id="login__user-email">
            <label>이메일</label>
            <input 
                type="email" 
                id="login__user-email-input"
                placeholder="example@gmail.com"
            />
        </div>

        <div class="login__field" id="login__user-password">
            <label>비밀번호</label>
            <input 
                type="password" 
                id="login__user-password-input"
                placeholder="password"
            />
        </div>

        <p class="helper-text" id="login__helper-text"></p>

        <button 
            class="login__btn" 
            id="login__btn" 
            disabled
        >로그인</button>
    `;

    return section;
}
