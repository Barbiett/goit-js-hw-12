
import axios from "axios";
let page = 1;
let limit = 15;
export const getPhoto = async (value) => {
    const KEY = "43058085-482a34128d0dce777e17b7853";
    const url = await axios.get(`https://pixabay.com/api/`, {
        params: {
            key: KEY,
            q: value,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: limit,
            page,
        }
    });
   
    return url.data;
}


