export function PostsCreate(){
    const section = document.createElement("section");
    section.className = "post-create";
    section.innerHTML = `
        <h2>게시글 작성</h2>
        <form>
        <label>제목*</label>
        <input id="post-title" type="text" placeholder="제목을 입력해주세요. (최대 26글자)">
        <p class="helper-text" id="helper-text-title">* helper text</p>

        <label>내용*</label>
        <textarea id="post-body" placeholder="내용을 입력해주세요."></textarea>
        <p class="helper-text" id="helper-text-body">* helper text</p>

        <label>이미지</label>
        <input id="post-image" type="file">

        <button id="btn-post-create" class="btn-primary" disabled>작성 완료</button>
        </form>`;
    return section;
}