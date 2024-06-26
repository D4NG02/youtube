'use client'

import { useEffect } from "react"

import VideoCard from "./VideoCard";
import useGetListVideo from "@/Hook/useGetListVideo";
import { useStateProvider } from "@/Utility/StateProvider";
import { reducerCases } from "@/Utility/constant";

export default function VideoList() {
    const [{ videoList }, dispatch] = useStateProvider()
    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
        const res = await useGetListVideo()
        dispatch({
            type: reducerCases.SET_VIDEO_LIST,
            videoList: res
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
