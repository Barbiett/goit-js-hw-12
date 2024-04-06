// let page = 1;
// let limit = 15;
// export const getPhoto = async (value) => {
//     const KEY = "43058085-482a34128d0dce777e17b7853";
//     const url = await Axios.get(`https://pixabay.com/api/`, {
//         params: {
//             key: KEY,
//             q: value,
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: true,
//             per_page: limit,
//             page: page,
//         }
//     });
   
//     return url.data;
// }

export function getPhoto(value) {
    const KEY = "43058085-482a34128d0dce777e17b7853";
    const params = new URLSearchParams({
        key: KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const bazeUrl = 'https://pixabay.com/api/';
    const url = `${bazeUrl}?${params}`;
   
    return fetch(url).then(res => res.json());
}
