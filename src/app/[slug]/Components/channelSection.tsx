'use client'

import moment from "moment";
import { useEffect, useState } from "react";

import IconArrowRight from "@/Media/IconArrowRight.svg";

import Popup from "@/Components/Popup";
import PopupContainer from "./popupContainer";
import Image from "next/image";

export default function ChannelSection() {
    const [open, setOpen] = useState<boolean>(false)
    const [channel, setChannel] = useState<{
        title: string, description: string, url: string, subscriberCount: string, thumbnails: string, videoCount: string, viewCount: string, joinDate: string
    }>({ title: '', description: '', url: '', subscriberCount: '', thumbnails: '', videoCount: '', viewCount: '', joinDate: '' })

    useEffect(() => {
        getChannelDetail()
    }, [])

    const getChannelDetail = async () => {
        const res = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCbaplPskYpdlFugvX1DGc5g&key=' +process.env.NEXT_PUBLIC_YT_KEY)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .catch((err) => {
                return err
            })

        setChannel({
            title: res.items[0].snippet.title,
            description: res.items[0].snippet.description,
            url: res.items[0].snippet.url,
            subscriberCount: Number(res.items[0].statistics.subscriberCount).toLocaleString('en-US'),
            thumbnails: res.items[0].snippet.thumbnails.default.url,
            videoCount: Number(res.items[0].statistics.videoCount).toLocaleString('en-US'),
            viewCount: Number(res.items[0].statistics.viewCount).toLocaleString('en-US'),
            joinDate: moment(res.items[0].snippet.publishedAt).format('ll').toString(),
        })
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
                <div>
                    <img className="max-w-none rounded-full w-[88px] h-[88px]" src={channel.thumbnails} alt="thumbnails" />
                </div>
                <div className="w-full">
                    <h2 className="text-3xl">{channel.title}</h2>
                    <p className="text-base">{channel.url}</p>
                    <p className="text-base">{channel.subscriberCount} subscribers ‧ {channel.videoCount} videos</p>
                </div>
            </div>
            <div className="flex">
                <p className="text-base line-clamp-1 w-[calc(100%-24px)]">{channel.description}</p>
                <button onClick={() => setOpen(true)}><Image className="text-[#0f0f0f] w-6" src={IconArrowRight} alt='icon' priority /></button>
            </div>

            {open && <Popup children={<PopupContainer channel={channel} />} onClose={() => { setOpen(false) }} />}
        </div>
    );
}
