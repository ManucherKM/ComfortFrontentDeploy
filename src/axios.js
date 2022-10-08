import axios from "axios"

const instance = axios.create({
    baseURL: "https://comfortbekapi.herokuapp.com/"
})

export default instance