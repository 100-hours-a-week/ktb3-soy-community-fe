import {Modal} from "../../components/modal/Modal.js";
import {deleteUser} from "../../api/userApi.js";
import { navigateTo } from "../../core/router.js";

export function handleUserDelete(titleMsg, contentMsg, userId){
    Modal(titleMsg, contentMsg);

    const modal = document.getElementById("modal-delete");

    const btnConfirm = modal.querySelector("#btn-confirm");
    const btnCancel = modal.querySelector("#btn-cancel");

    btnCancel.addEventListener("click", 
        () => modal.remove()
    );

    btnConfirm.addEventListener("click", () => {
        deleteUser(userId);
        modal.remove();
        navigateTo("/");
        localStorage.clear();
    })
}