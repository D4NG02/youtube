import IconMore from "@/Media/IconMore.svg";
import IconButton from "./IconButton";
import { useEffect, useState } from "react";
import useGetChannel from "@/Hook/useGetChannel";
import { useStateProvider } from "@/Utility/StateProvider";
import { reducerCases } from "@/Utility/constant";

export default function VideoCard({ detail }: {
    detail: {
        thumbnail: string,
        channelId: string,
        watch: string,
        title: string,
        view: string,
        sinceTime: string,
        duration: string
    }
}) {
    const [{ channelList }, dispatch] = useStateProvider()

    useEffect(() => {
        getChannel()
    }, [])

    const getChannel = async () => {
        const res = await useGetChannel(detail.channelId)
        dispatch({
            type: reducerCases.SET_CHANNEL_LIST,
            channelList: [...channelList, res]
        })
    }

    const navigateChannel = () => {
    }
    const navigateVideo = () => {
        window.open(detail.watch)
    }

    return (
        <div className="card flex flex-col gap-2">
            <a className="w-full h-[190px] sm:w-[120px] sm:h-[90px]" target='_self' href={detail.watch}>
                <img className="max-w-none w-full h-full rounded-md" src={detail.thumbnail} alt="thumbnails" />
            </a>
            <div className="flex flex-row gap-4">
                <a className="font-normal text-sm" target='_self' href={channelList.url}>
                    <img className="max-w-none w-[36px] h-[36px] rounded-md" src={channelList.thumbnails} alt="channel icon" />
                </a>
                <div className="w-[calc(100%-36px-24px)] flex flex-col">
                    <a className="font-medium text-base pb-1" target='_self' href={detail.watch}>
                        <h4>{detail.title}</h4>
                    </a>
                    <a className="font-normal text-sm" target='_self' href={channelList.url}>{channelList.title}</a>
                    <a className="font-normal text-sm" href={detail.watch}>{detail.view} ‧ {detail.sinceTime}</a>
                </div>
                <IconButton src={IconMore} className="bg-transparent" />
            </div>
        </div>
    );
}
