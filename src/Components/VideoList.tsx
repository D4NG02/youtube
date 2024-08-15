'use client'

import { useEffect } from "react"

import VideoCard from "./VideoCard";
import useGetListVideo from "@/Hook/useGetListVideo";
import { useStateProvider } from "@/Utility/StateProvider";
import { reducerCases } from "@/Utility/constant";
import useGetChannel from "@/Hook/useGetChannel";

export default function VideoList() {
    const [{ videoList, channelList }, dispatch] = useStateProvider()
    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
        const res = await useGetListVideo()
        dispatch({
            type: reducerCases.SET_VIDEO_LIST,
            videoList: []
        })
        dispatch({
            type: reducerCases.SET_VIDEO_LIST,
            videoList: res
        })

        res.map((list: { channelId: string }) => {

        })
    }

    const getChannel = async (id: string) => {
        const res = await useGetChannel(id)
        dispatch({
            type: reducerCases.SET_CHANNEL_LIST,
            channelList: res
        })
    }

    return (
        <div className="content">
            {
                videoList.map((value: {
                    thumbnail: string,
                    channelId: string,
                    watch: string,
                    title: string,
                    view: string,
                    sinceTime: string,
                    duration: string
                }, index: number) => {
                    return (
                        <VideoCard key={index} detail={value} />
                    )
                })
            }
        </div>
    );
}
