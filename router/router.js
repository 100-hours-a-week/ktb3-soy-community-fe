import {Login} from "../components/Login.js";
import {Posts} from "../components/Posts.js";
import { PostsCreate } from "../components/PostsCreate.js";

const routes = {
    "/": Login,
    "/posts": Posts,
    "/posts/create": PostsCreate
};

export function navigateTo(routeName){
    const app = document.getElementById("app");
    app.innerHTML = "";

    const component = routes[routeName];
    app.appendChild(component());
}

export function initRouter(){
    navigateTo("/");
}