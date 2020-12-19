import { SET_USER } from "./UserTypes";

const initialState={
    user: null,
}

function UserReducer(state=initialState, action){
    switch(action.type){
        case SET_USER:
            return {
                user: action.payload,
            };
        default:
            return state;
    }
}

export default UserReducer;