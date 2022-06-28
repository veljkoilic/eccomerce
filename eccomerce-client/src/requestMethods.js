import axios from "axios";
const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTgyYWEyMjZlYzhlOGI2NGEyNGE1YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTE4ODE3NywiZXhwIjoxNjU1NDQ3Mzc3fQ.EBKpE3v35j0mBVkqZvaVlYrMGdBmuOjDtVDC6F288qs"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:"Bearer " + TOKEN}
})