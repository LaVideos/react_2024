import axios from "axios";
import {Base_Url} from "../constansts/url";

let axiosInstance = axios.create({baseURL:Base_Url,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }

})

export {axiosInstance}
