import { apiFetch } from "./api.js";

export async function findAllMembers() {
    return await apiFetch({
        path: "/api/admin/members",
        methodType: "GET"
    })
}