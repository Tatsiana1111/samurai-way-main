import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0416d0e4-e507-4140-8ae2-fbcfceb7fe23'
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

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
    },

    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: string | null) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
    savePhoto(photos: any) {
        const formData = new FormData()
        formData.append('Image', photos)
        return instance.put(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then(response => {
                return response.data
            })
    },
    saveProfile(data: any) {
        return instance.put(`profile`, data)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logOut() {
        return instance.delete(`auth/login`)
    },
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`)
    }
}