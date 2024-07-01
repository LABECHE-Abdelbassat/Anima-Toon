import axios from "axios"

export const getTheMoviesList = (url)=>{
    return async (dispatch)=>{
        const ress =await axios.get(url);
        dispatch({type:"MOVIES LIST" , payload : ress.data})
    }
}
export const getTopRatedMoviesList = (url)=>{
    return async (dispatch)=>{
        const ress =await axios.get(url);
        dispatch({type:"TOPRATED LIST" , payload : ress.data})
    }
}
export const getUpComingMoviesList = (url)=>{
    return async (dispatch)=>{
        const ress =await axios.get(url);
        dispatch({type:"UPCOMING LIST" , payload : ress.data})
    }
}
export const getNowPlayingMoviesList = (url)=>{
    return async (dispatch)=>{
        const ress =await axios.get(url);
        dispatch({type:"NOWPLAYING LIST" , payload : ress.data})
    }
}
export const getResultMoviesList = (url)=>{
    return async (dispatch)=>{
        const ress =await axios.get(url);
        dispatch({type:"RESULT LIST" , payload : ress.data})
    }
}

// import axios from "axios"

// export const AllMoviesAction = (p)=>{
//     return async (dispatch)=>{
//         const ress =await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&with_genres=16,10751&include_video=true&include_adult=false&page="+p);
//         dispatch({type:"ALL MOVIES" , payload : ress.data.results})
//     }
// }