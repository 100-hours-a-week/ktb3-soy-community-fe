export async function createPost(postData, userId){
    try{
        const response = await fetch(`http://localhost:8080/api/posts?userId=${userId}`, {
                method: "POST", 
                headers: {
                  "Header": "application/json",
                  "Content-Type": "application/json"},
                body: JSON.stringify(postData)
            });
        
        if (!response.ok) alert("게시글 등록 실패");
        const data = await response.json();
        data.state = "success";
        return data;
    } catch(error){
        console.log("게시글 등록 실패 : " + error);
        return {"state": "fail"};
    }
}

export function fetchPosts(){
  fetch(getPostsURL + `page=${currentPage}&size=${default_size}`).then(
    response => response.json()
  ).then(
    data => {
      renderPosts(data.postItemResponseList);
      if (data.pagingMeta.pageSize === 0){
        noMorePage = true;
      }
    }
  ).catch(
    err => console.error("게시글 목록 조회 실패", err));
  currentPage++;
}