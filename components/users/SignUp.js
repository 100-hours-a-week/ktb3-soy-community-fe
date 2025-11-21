export function SignUp(){
    const section = document.createElement("section");
    section.className = "signup-box";

    section.innerHTML = `
    <h2 class="signup__title">회원가입</h2>
    <form class="signup__form">
        <label class="signup__label">프로필 사진</label>
        <p class="helper-text"></p>
        
        <div class="signup__profile-img">
          <label for="userProfileImg" class="signup__profile-img-preview">
              <img class="signup__profile-img-tag" id="userProfileImgPreview" alt="Profile Image" src="../../images/default_user_profile.png" />
          </label>
          <input type="file" class="signup__profile-file" id="userProfileImg" accept="image/*" />
        </div>

        <div class="signup__field">
            <label class="signup__label">이메일*</label>
            <input class="signup__input" type="email" id="userEmail" placeholder="이메일을 입력하세요">
            <p class="helper-text" id="helper-text-email"></p>
        </div>

        <div class="signup__field">
            <label class="signup__label">비밀번호*</label>
            <input class="signup__input" type="password" id="userPassword" placeholder="비밀번호를 입력하세요">
            <p class="helper-text" id="helper-text-pw"></p>
        </div>

        <div class="signup__field">
            <label class="signup__label">비밀번호 확인*</label>
            <input class="signup__input" type="password" id="userPasswordCheck" placeholder="비밀번호를 한 번 더 입력하세요">
            <p class="helper-text" id="helper-text-pw-check"></p>
        </div>

        <div class="signup__field">
            <label class="signup__label">닉네임*</label>
            <input class="signup__input" type="text" id="userNickname" placeholder="닉네임을 입력하세요">
            <p class="helper-text" id="helper-text-nickname"></p>
        </div>


    </form>

    <button class="signup__btn" id="signup__btn" disabled>회원가입</button>

    <p class="link_to" id="signup__login_link_to">로그인하러 가기</a></p>
  `;
  return section;
}