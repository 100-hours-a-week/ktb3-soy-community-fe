import {Login} from "../components/Login.js";
import {Posts} from "../components/Posts.js";
import { PostsCreate } from "../components/PostsCreate.js";
import {PostDetail} from "../components/PostDetail.js";
import { CommentsSection } from "../components/comments/CommentsSection.js";

export function router() {
  const path = window.location.pathname;
  const app = document.getElementById('app');
  app.innerHTML = '';

  const matchedRoute = matchRoute(path);
  const components = matchedRoute.component;
  const param = matchedRoute.param;

  components.forEach(component => {
    app.appendChild(component(param));
  });
}


const routes = [
  { path: /^\/$/, component: [Login] },
  { path: /^\/posts$/, component: [Posts] },
  { path: /^\/posts\/create$/, component: [PostsCreate] },
  { path: /^\/posts\/([^/]+)$/, component: [PostDetail, CommentsSection] }, // ← :id 패턴 대응
];

export function matchRoute(path) {
  for (const route of routes) {
    const match = path.match(route.path);
    if (match) {
      const param = match[1]; // 정규식 그룹으로 추출됨
      return { component: route.component, param };
    }
  }
  return { component: NotFound, param: undefined };
}


export function navigateTo(url) {
  window.history.pushState({}, '', url);
  router();
}

// 뒤로가기/앞으로가기 처리
window.addEventListener('popstate', router);




// const routes = {
//     "/": Login,
//     "/posts": Posts,
//     "/posts/create": PostsCreate
// };

// export function clean(){
//     const app = document.getElementById("app");
//     app.innerHTML = "";
// }

// export function navigateTo(routeName){
//     clean();
//     const component = routes[routeName];
//     app.appendChild(component());
// }

// export function navigateToPostDetail(postId){
//     clean();
//     const component = PostDetail(postId);
//     app.appendChild(component);
// }

export function initRouter(){
    navigateTo("/");
}