
export const PageReducer = (state = {page : 1} , action) => {
    switch (action.type) {
        case "NEXT PAGE":
            return {page : state.page + 1}

        case "PREV PAGE":
            return {page : state.page - 1}

        case "RESET PAGE":
            return {page : 1}

    
        default:
            return state

    }
}

