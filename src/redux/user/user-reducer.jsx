const INITIAIL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAIL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            console.log(state)
            console.log(action)
            return {
                ...state,
                currentUser: action.payload.currentUser
            }
        default:
            return state;
    }
}

export default userReducer