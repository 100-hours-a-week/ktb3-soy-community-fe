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

export async function getPosts(currentPage, pageSize){
  const getPostsURL = "http://localhost:8080/api/posts?";
  const url = getPostsURL + `page=${currentPage}&size=${pageSize}`;

  try{
    const response = await fetch(url);
    if (!response.ok) console.log("게시글 목록 조회 실패");
    return response.json();
  } catch{
    console.error("게시글 목록 조회 실패", err);
  }
}