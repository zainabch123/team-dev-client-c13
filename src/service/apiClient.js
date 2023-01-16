import { posts, user } from "./mockData"

async function login(email, password) {
    return new Promise(res => {
        res(user)
    })
}

async function getPosts() {
    return new Promise(res => {
        res(posts)
    })
}

export {
    login,
    getPosts
}