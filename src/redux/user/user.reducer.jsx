import {UserActionTypes} from './user.types'

const INITIAIL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAIL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.currentUser
            }
        default:
            return state;
    }
}

export default userReducer