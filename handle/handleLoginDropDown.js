export function setNewDropDown(){
    const header = document.getElementById("header");
    const userProfile = document.querySelector("#user-profile");
    const userProfileImage = document.querySelector("#profile-img");

    userProfile.style.display = 'inline-block';
    userProfileImage.src = localStorage.getItem("userProfileImg");

}