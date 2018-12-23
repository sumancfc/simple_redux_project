import axios from 'axios';

export function artistList(keywords){
    const request = axios.get(`http://localhost:3004/artists?q=${keywords}`)
        .then(response => response.data)

    return {
        type:'GET_ARTISTS',
        payload: request
    }
}

export function allArtistsList(){

    const request = axios.get(`http://localhost:3004/artists?_limit=6`)
        .then(response => response.data)
   
   
        return{
    type: "GET_ALL_ARTISTS",
    payload: request
   }
}

export function ArtistDetail(id){

    const request = axios.get(`http://localhost:3004/artists?id=${id}`)
        .then(response => response.data)
   
   
        return{
    type: "GET_ARTISTS_DETAILS",
    payload: request
   }
}

export function clearArtistDetail(){
    return{
        type: "CLEAR_ARTIST_DETAILS",
        payload: null
    }
}