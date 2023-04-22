import axios from 'axios'
const BASE_URL='https://fakestoreapi.com'



const getProductDetails=async(id)=>{
    const response=await axios.get(`${BASE_URL}/products/${id}`)
    return response.data
}

export {getProductDetails}
