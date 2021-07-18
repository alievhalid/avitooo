const initialState = {
    loading: false,
    modalImage: {},
    comments: [],
    deleting: false
}

const modal = (state = initialState, action) => {
    switch (action.type) {

        case "modal/load/start":
            return {
                ...state,
                loading: true,
            }

        case "modal/load/success":
            return {
                ...state,
                modalImage: {
                    url: action.payload.url
                },
                comments: action.comments,
                loading: false
                
                
            }
            default:
            return state;
    }
}

export default modal