import axios from "axios";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URL;

const api = axios.create({
  baseURL: BACKEND_API,
  headers: {
    Authorization: `Bearer `,
  },
});

// const errorHandler = (error)=>{
//     return Promise.reject(error)
// }

// api.interceptors.request.use((config)=>{
//     return {
//         ...config,
//         headers: {
//             Authorization : `Bearer ${}`
//         }
//     }
// }, errorHandler)

// api.interceptors.response.use((response)=>{
//     return response
// }, errorHandler)

export default api;
