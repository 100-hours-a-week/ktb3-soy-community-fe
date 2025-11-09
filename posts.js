const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");
const src_default_user_profile = "../images/default_user_profile.png";

function fromCreatedAt(createdAt){
  return createdAt.replace("T", " ")
}


function renderPosts(posts){
    const postList = document.getElementById("post-list");
    posts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = `
        <h3>${post.title}</h3>
        <div class="post-meta">
          <p>좋아요 ${post.statsLikeCounts} 댓글 ${post.statsCommentCounts} 조회수 ${post.statsViewCounts}</p>
          <p>${fromCreatedAt(post.createdAt)}</p>
        </div>
        <hr/>
        <div class="author">
          <img class="profile-img" id="profile-img" src=${post.userProfileImgUrl}
          onerror="this.onerror=null; this.src='${src_default_user_profile}';"
          />
          <span>${post.userNickname}</span>
        </div>
        `;
        postList.appendChild(postCard);
    });
}


fetch(`http://localhost:8080/api/posts?page=0&size=20`)
  .then(response => response.json())
  .then(data => {
    renderPosts(data.postItemResponseList);
  })
.catch(err => console.error(err));
