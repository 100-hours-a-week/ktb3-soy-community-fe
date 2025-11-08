const input = document.getElementById("userProfileImg");
const preview = document.getElementById("preview");

let uploaded = false; // 현재 이미지 업로드 여부 플래그
const defaultImg = "default-profile.png"; // 기본 이미지 경로

input.addEventListener("click", () => {
  // 클릭 시 현재 업로드된 상태 기억
  input.dataset.previousUploaded = uploaded;
});

input.addEventListener("change", (e) => {
  const file = e.target.files[0];

  // 파일을 새로 선택하지 않고 창을 닫은 경우
  if (!file) {
    // 기존에 업로드된 상태였다면 → 이미지 삭제
    if (input.dataset.previousUploaded === "true") {
      preview.src = defaultImg;
      uploaded = false;
    }
    return;
  }

  // 파일 선택 → 이미지 미리보기 표시
  const reader = new FileReader();
  reader.onload = (event) => {
    preview.src = event.target.result;
    uploaded = true;
  };
  reader.readAsDataURL(file);
});
