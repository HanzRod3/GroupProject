import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8004/posts'
})

export const createPostService =async postData => {
    try{
        const res = await http.post('/',postData)
        return res.data
    } catch (error){throw error}
}

export const getAllPostService = async () => {
    try{
        const res = await http.get('/all')
        return res.data
    } catch (error){throw error}
}

export const getPostByIdService = async id => {
    try{
        const res = await http.get (`/${id}`)
        return res.data
    } catch (error){throw error}
}

export const updatePostService = async (id, data) => {
    try{
        const res = await http.put(`/${id}`,data)
        return res.data
    } catch (error){throw error}
}

export const deletePostService = async id => {
    try{
        const res = await http.delete(`/${id}`)
        return res.data
    } catch (error){throw error}
}
