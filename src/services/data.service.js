import axios from 'axios';
import { store } from '../reducers';

axios.defaults.baseURL = 'https://bikes-rental.herokuapp.com/api'
axios.interceptors.response.use(res => res.data, err=>Promise.reject(err.response))
const getAuthHeader = () => ({Authorization: `Bearer ${store.getState().token}`})

export const ApiService =  {
    login(item){
        return axios.post('users/login', item)
    },

    signup(item){
        return axios.post('users', item)
    },

    editMyProfile(id, item){
        return axios.put(`users/${id}/info`, item, {headers: getAuthHeader()})
    },

    getUser(id, cancelToken) {
        return axios.get(`users/${id}`, {headers: getAuthHeader(), cancelToken})
    }
}