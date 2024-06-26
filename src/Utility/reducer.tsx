'use client'

import { reducerCases } from "./constant"

export const initialState = {
    videoPlayId: '',
    videoList: [ ],
    channel: {},
    channelList: [],
}


export const initialStateType = typeof initialState

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case reducerCases.SET_VIDEO_PLAY:
            return { ...state, videoPlayId: action.videoPlayId }

        case reducerCases.SET_VIDEO_LIST:
            return { ...state, videoList: action.videoList }

        case reducerCases.SET_CHANNEL_PLAY:
            return { ...state, channel: action.channel }

        case reducerCases.SET_CHANNEL_LIST:
            return { ...state, channelList: action.channelList }

        default:
            console.log("Error reducerCases type")
            break;
    }
}

export default reducer