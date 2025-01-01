import axios from "axios";

const userService = {
    sendDataUser : async () => {
        try{
            await axios.post(`${import.meta.env.VITE_API_URL}/api/user`, {
                headers : {"Content-Type" : "application/json"},
                withCredentials : true,
            })
        }catch (error){
            throw error.response?.data || error.message;
        }
    },
  
}

export default userService