const initialState = {
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    id: localStorage.getItem('id'),
    token: localStorage.getItem('id_token')
}

export const authStoreState = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {
                isAuthenticated: true,
                id: action.payload.user._id,
                token: action.payload.token
            }
        case 'LOGGED_OUT':
            return {
                isAuthenticated: false,
                id: undefined,
                token: undefined
            }
        default:
            return state
    }
}