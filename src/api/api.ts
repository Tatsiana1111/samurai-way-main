import axios from "axios";
import {UserType} from "../redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0416d0e4-e507-4140-8ae2-fbcfceb7fe23'
    }
})


export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}


export const followAPI = {
    follow(user: UserType) {
        return instance.post(`follow/${user.id}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollow(user: UserType) {
        return instance.delete(`follow/${user.id}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}
