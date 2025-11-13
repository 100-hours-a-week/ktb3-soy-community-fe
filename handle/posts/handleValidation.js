export function handleInvalidTitle(helperText, title){
    if (title == ""){
        helperText.textContent = "제목을 작성하세요.";
        helperText.className = "helper-text show";
        return false;
    } else if (title.length > 26) {
        helperText.textContent = "제목은 최대 26자까지 작성해주세요.";
        helperText.className = "helper-text show";
        return false;
    } else {
        helperText.className = "helper-text hide";
        return true;
    }
}

export function handleInvalidBody(helperText, body){
    if (body == ""){
        helperText.textContent = "본문을 작성하세요.";
        helperText.className = "helper-text show";
        return false;
    } else {
        helperText.className = "helper-text hide";
        return true;
    }
}