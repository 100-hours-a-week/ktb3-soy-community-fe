import {h} from "../../core/renderer.js"
import { navigateTo } from "../../core/router.js"
import { Dropdown } from "../Dropdown/Dropdown.js"

export function PostCardDropDown(){
    return Dropdown(
        {
            placeholder:  "⋯",
            options: [
                {value: "edit", label: "수정"},
                {value: "delete", label: "삭제"}
            ], 
            className: "postCardDropDown",
            clickEvents: {
                edit: () => console.log("삭제"),
                delete: () => console.log("삭제")
            }
        }
    
        
    );
}