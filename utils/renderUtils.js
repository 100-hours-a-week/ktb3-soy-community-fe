import { Header } from "../components/header.js";

export function renderHeader(){
    console.log('hi');
    // 기존 헤더 제거
    const existingHeader = document.querySelector("header");
    if (existingHeader) {
        existingHeader.remove();
    }

    // 새 헤더 생성
    const newHeader = Header();

    // body의 맨 위에 추가
    document.body.prepend(newHeader);
}