import axios from 'axios';

axios.defaults.baseURL = 'https://bikes-rental.herokuapp.com/api'
axios.interceptors.response.use(res => res.data, err=>Promise.reject(err.response))


export const ApiService =  {
    login(item){
        return axios.post('users/login', item)
    },

    signup(item){
        return axios.post('users', item)
    },

    editMyProfile(id, item){
        return axios.put(`users/${id}/info`, item)
    },

    getUser(id) {
        return axios.get(`users/${id}`)
    }
}