import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8004/posts'
})

export const likePost = async (id) => {
    try{
        const res = await http.put(`/${id}/like`)
        return res.data
    } catch (error){throw error}
}

export const lovePost = async (id) => {
    try{
        const res = await http.put(`/${id}/love`)
        return res.data
    } catch (error){throw error}
}

export const hugPost = async (id) => {
    try{
        const res = await http.put(`/${id}/hug`)
        return res.data
    } catch (error){throw error}
}


