"use client";

import moment from "moment";

export default async function useGetChannel(channelId: string) {
    const endpoint: string = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=' + channelId + '&key=' + process.env.NEXT_PUBLIC_YT_KEY
    let channel: {
        title: string,
        description: string,
        url: string,
        subscriberCount: string,
        thumbnails: string,
        videoCount: string,
        viewCount: string,
        joinDate: string
    } = {
        title: '',
        description: '',
        url: '',
        subscriberCount: '',
        thumbnails: '',
        videoCount: '',
        viewCount: '',
        joinDate: ''
    }

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

        if (res.items) {
            channel = {
                title: res.items[0].snippet.title,
                description: res.items[0].snippet.description,
                url: '/channel?id=' +res.items[0].snippet.customUrl,
                subscriberCount: Number(res.items[0].statistics.subscriberCount).toLocaleString('en-US'),
                thumbnails: res.items[0].snippet.thumbnails.default.url,
                videoCount: Number(res.items[0].statistics.videoCount).toLocaleString('en-US'),
                viewCount: Number(res.items[0].statistics.viewCount).toLocaleString('en-US'),
                joinDate: moment(res.items[0].snippet.publishedAt).format('ll').toString(),
            }
        }
    } catch (error) {
        console.log(error)
    }

    return channel
}
