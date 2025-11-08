const userData = {};
function convertFileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function changePreview(newImageUrl){
  const imagePreview = document.getElementById("userProfileImgPreview");
  imagePreview.src = newImageUrl;
}

const imageInput = document.getElementById("userProfileImg");
imageInput.addEventListener("change", handleProfileImageChange);

async function handleProfileImageChange(event) {
  try {
    const file = event.target.files[0];
    const imageUrl = await convertFileToDataURL(file);
    userData.userProfileImgUrl = imageUrl;
    changePreview(imageUrl);
  } catch(err) {
    console.log(err);
  }
}

const signUpBtn = document.getElementById("btn-signup");
signUpBtn.addEventListener("click", postSignUpData);

function postSignUpData(){
    setSignUpData();
    if(userData.state == "fail") return;
    postServer();
}

function isNotValidPassword(userPassword, userPasswordCheck){
    return userPassword == userPasswordCheck;
}

function setSignUpData(){

  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  const userPasswordCheck = document.getElementById("userPasswordCheck").value;
  const userNickname = document.getElementById("userNickname").value;
  
  if(!isNotValidPassword(userPassword, userPasswordCheck)){
    userData.state = "fail";
    return;
  }

  userData.userEmail = userEmail;
  userData.userPassword = userPassword;
  userData.userNickname = userNickname;
}

function fetchData(url, options){
    fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('네트워크 응답이 정상적이지 않습니다');
      }
      return response.json(); 
    })
    .then(data => {
      console.log('응답:', data);
    })
    .catch(error => {
      console.error('fetch 작업 중 문제가 발생했습니다:', error);
    });
}

function postServer(){
    event.preventDefault();
    const url = "http://localhost:8080/api/users";
    const jsonData = JSON.stringify(userData);

    const options = { method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: jsonData
    };
    fetchData(url, options);
}