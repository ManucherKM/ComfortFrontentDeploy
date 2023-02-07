import axios from "axios"

const instance = axios.create({
    baseURL: "https://comfort-bekend.vercel.app/"
})

export default instance
