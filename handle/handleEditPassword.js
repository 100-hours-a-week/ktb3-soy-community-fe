import { patchNewPassword } from "../api/userApi.js";

export async function handleEditPassword(userOldPassword, userNewPassword){
    const userId = localStorage.getItem("userId");
    await patchNewPassword(userId, userOldPassword, userNewPassword);
}