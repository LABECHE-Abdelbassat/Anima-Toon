
export const MoviesListReducer = (state = {movies : [] , pageCount :1} , action) => {
    switch (action.type) {
        case "MOVIES LIST":
            return {movies : action.payload.results , pageCount : action.payload.total_pages}

        default:
            return state
    }
}
export const TopRatedListReducer = (state = {movies : [] , pageCount :1} , action) => {
    switch (action.type) {
        case "TOPRATED LIST":
            return {movies : action.payload.results , pageCount : action.payload.total_pages}

        default:
            return state
    }
}
export const NowPlayingListReducer = (state = {movies : [] , pageCount :1} , action) => {
    switch (action.type) {
        case "NOWPLAYING LIST":
            return {movies : action.payload.results , pageCount : action.payload.total_pages}

        default:
            return state
    }
}
export const UpComingListReducer = (state = {movies : [] , pageCount :1} , action) => {
    switch (action.type) {
        case "UPCOMING LIST":
            return {movies : action.payload.results , pageCount : action.payload.total_pages}

        default:
            return state
    }
}
export const ResultListReducer = (state = {movies : [] , pageCount :1} , action) => {
    switch (action.type) {
        case "RESULT LIST":
            return {movies : action.payload.results , pageCount : action.payload.total_pages}

        default:
            return state
    }
}



// export const TotalPageReducer = (state = {totalPage : 1} , action) => {
//     switch (action.type) {
//         case "SET TOTAL":
//             return {totalPage : action.total}
    
//         default:
//             return state

//     }
// }