import axios from "axios";

//api
//https://api.themoviedb.org/3/movie/550?api_key=039d5075b751e99e3ff9e704813708b0


//now_playing
//https://api.themoviedb.org/3/movie/now_playing?api_key=039d5075b751e99e3ff9e704813708b0&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;