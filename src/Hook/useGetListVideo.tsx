"use client";

import moment from "moment";
import { parse } from "iso8601-duration";

export default async function useGetListVideo() {
    const endpoint: string = 'https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=statistics&part=snippet&part=player&chart=mostPopular&maxResults=1&key=' + process.env.NEXT_PUBLIC_YT_KEY
    let video: {
        thumbnail: string,
        channelId: string,
        watch: string,
        title: string,
        view: string,
        sinceTime: string,
        duration: string
    }[] = []

    try {
        const res = await fetch(endpoint)
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
            video = []
            res.items.map((item: any) => {
                let timeDiff: string = '0'
                const publishDate = moment(item.snippet.publishedAt)
                if (currentDate.diff(publishDate, 'hours') > 1 && currentDate.diff(publishDate, 'hours') < 25) {
                    timeDiff = currentDate.diff(publishDate, 'hours') + ' hours'
                } else {
                    timeDiff = 'New diff'
                }

                const duration: string = parse(item.contentDetails.duration).hours + ':' + parse(item.contentDetails.duration).minutes + ':' + parse(item.contentDetails.duration).seconds

                video.push({
                    watch: '/watch?v=' + item.id,
                    channelId: item.snippet.channelId,
                    thumbnail: item.snippet.thumbnails.default.url,
                    title: item.snippet.title,
                    view: Number(item.statistics.viewCount).toLocaleString('en-US') + ' views',
                    sinceTime: timeDiff,
                    duration: duration
                })
            })
        }
    } catch (error) {
        console.log(error)
    }

    return video
}
