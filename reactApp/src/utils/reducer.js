import { reducerCases } from './constants'

export const initialState = {
    token: null,
    playlists: [],
    userInfo: null,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN : {
            return {
                ...state, 
                token: action.token,
            }
        }
        case reducerCases.SET_PLAYLISTS: {
            return {
                ...state,
                playlists: action.playlists,
            }
        }
        case reducerCases.SET_USER: {
            return {
                ...state,
                userInfo: action.userInfo,
            }
        }
        case reducerCases.SET_PLAYING: {
            return {
                ...state,
                playing: action.playing,
            }
        }
        default: 
        return state;
    }
}