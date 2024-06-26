'use client'

import moment from "moment"
import { parse } from "iso8601-duration";
import { useEffect, useState } from "react"

import VideoCard from "./VideoCard";

export default function VideoList() {
    const [video, setVideo] = useState<{
        thumbnail: string,
        channel: string,
        src: string,
        title: string,
        view: number,
        sinceTime: string,
        duration: string
    }[]>([])


    useEffect(() => {
        getList()

        console.log(video)
    }, [])

    const getList = async () => {
        setVideo([])
        const res = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=statistics&part=snippet&part=player&chart=mostPopular&maxResults=1&key=' +process.env.NEXT_PUBLIC_YT_KEY)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .catch((err) => {
                return err
            })

        const currentDate = moment()
        if (res.items) {
            console.log(res.items)
            
            res.items.map((item: any) => {
                let timeDiff: string = '0'
                const publishDate = moment(item.snippet.publishedAt)
                if (currentDate.diff(publishDate, 'hours') > 1 && currentDate.diff(publishDate, 'hours') < 25) {
                    timeDiff = currentDate.diff(publishDate, 'hours') + ' hours'
                } else {
                    timeDiff = 'New diff'
                }

                const duration: string = parse(item.contentDetails.duration).hours +':'+ parse(item.contentDetails.duration).minutes +':'+ parse(item.contentDetails.duration).seconds

                setVideo(prevStateArray => [...prevStateArray, {
                    src: 'https://www.youtube.com/watch?v=' + item.id,
                    channel: item.snippet.channelTitle,
                    thumbnail: item.snippet.thumbnails.default.url,
                    title: item.snippet.title,
                    view: item.statistics.viewCount,
                    sinceTime: timeDiff,
                    duration: duration
                }])
            })
        }
    }

    return (
        <div className="content">
            {
                video.map((value, index: number) => {
                    return (
                        <VideoCard key={index} detail={value} />
                    )
                })
            }
        </div>
    );
}
