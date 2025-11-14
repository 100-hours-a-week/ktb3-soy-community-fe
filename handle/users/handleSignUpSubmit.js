import { postSignUpData, uploadProfileImage } from "../../api/userApi.js";

export async function handleSignUpSubmit(section, userEmail, userPassword, userPasswordCheck, userNickname){
    const email = userEmail.value;
    const password = userPassword.value;
    const passwordCheck = userPasswordCheck.value;
    const nickname = userNickname.value;
    const userData = {
        userEmail: email,
        userPassword: password,
        userNickname: nickname
    };
    
    await postSignUpData(userData);

    const profileImgInput = section.querySelector("#userProfileImg");
    console.log(profileImgInput);
    console.log(profileImgInput.files.length);
    if (profileImgInput && profileImgInput.files.length > 0) {
        console.log("dlrj")
        const file = profileImgInput.files[0];
        await uploadProfileImage(file);
    }

}
