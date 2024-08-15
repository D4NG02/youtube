import IconMore from "@/Media/IconMore.svg";
import IconButton from "./IconButton";

import { useStateProvider } from "@/Utility/StateProvider";
import Link from "next/link";

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
    const [{ channelList }, _] = useStateProvider()

    return (
        <div className="card flex flex-col gap-2">
            {channelList && <>
                <Link href={detail.watch} className="w-full h-[190px] sm:w-[120px] sm:h-[90px]">
                    <img className="max-w-none w-full h-full rounded-md" src={detail.thumbnail} alt="thumbnails" />
                </Link>
                <div className="flex flex-row gap-4">
                    <Link href={detail.watch} className="font-normal text-sm">
                        <img className="max-w-none w-[36px] h-[36px] rounded-md" src={channelList.thumbnails} alt="channel icon" />
                    </Link>
                    <div className="w-[calc(100%-36px-24px)] flex flex-col">
                        <Link href={detail.watch} className="font-medium text-base pb-1">
                            <h4>{detail.title}</h4>
                        </Link>
                        <Link href={'channelList.url'} className="font-normal text-sm">
                            {channelList.title}
                        </Link>
                        <Link href={detail.watch} className="font-normal text-sm">
                            {detail.view} ‧ {detail.sinceTime}
                        </Link>
                    </div>
                    <IconButton src={IconMore} className="bg-transparent" />
                </div>
            </>}
        </div>
    );
}
