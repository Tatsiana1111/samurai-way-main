import axios from "axios";

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
    follow(userID: number) {
        return instance.post(`follow/${userID}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
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

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    }
}
