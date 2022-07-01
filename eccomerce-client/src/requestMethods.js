import axios from "axios";
const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTgyYWEyMjZlYzhlOGI2NGEyNGE1YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjY2MzM3MiwiZXhwIjoxNjU2OTIyNTcyfQ.XP5byewqkNZF7CSaKKXv9DjbwarkpXONPjbSwYepREE"
const not_so_secret_token = "Bearer sk_test_51LAtFrJy32syO5XZRR8OKOEkXQyImHkh7VRwz9HPY1LOj1yAe1nG3hTDcoQlUuBfKAQU6u6vPYLBlOsaaJ0F65hl00kElZLmFa"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": "Bearer sk_test_51LAtFrJy32syO5XZRR8OKOEkXQyImHkh7VRwz9HPY1LOj1yAe1nG3hTDcoQlUuBfKAQU6u6vPYLBlOsaaJ0F65hl00kElZLmFa"
      }
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:"Bearer " + TOKEN}
})