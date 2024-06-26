import Icon from "@/Components/Icon";

import IconClose from "@/Media/IconClose.svg";
import IconGlobe from "@/Media/IconGlobe.svg";
import IconSubscriber from "@/Media/IconSubscriber.svg";
import IconVideo from "@/Media/IconVideo.svg";
import IconStatistic from "@/Media/IconStatistic.svg";
import IconInfo from "@/Media/IconInfo.svg";

export default function PopupContainer({ channel }: {
    channel: {
        title: string,
        description: string,
        customUrl: string,
        subscriberCount: number,
        thumbnails: string,
        videoCount: number,
        viewCount: number,
        joinDate: string
    }
}) {

    return (
        <div className="flex flex-col gap-5 text-sm">
            <div>
                <h3 className="text-[#0f0f0f] font-bold pb-2 text-xl">About<Icon src={IconClose} className="hover:bg-gray-300 rounded-full p-1 absolute top-0 end-0" /></h3>
                {channel.description.split('\n').map((value: string, index: number) => {
                    return (<p key={index}>{value}</p>)
                })}
            </div>
            <div>
                <h3 className="text-[#0f0f0f] font-bold pb-2 text-xl">Channel details</h3>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-4"><Icon src={IconGlobe} /><span>{'www.youtube.com/' + channel.customUrl}</span></div>
                    <div className="flex flex-row gap-4"><Icon src={IconSubscriber} /><span>{channel.subscriberCount.toLocaleString('en-US')} subscribers</span></div>
                    <div className="flex flex-row gap-4"><Icon src={IconVideo} /><span>{channel.videoCount} videos</span></div>
                    <div className="flex flex-row gap-4"><Icon src={IconStatistic} /><span>{channel.viewCount.toLocaleString('en-US')} views</span></div>
                    <div className="flex flex-row gap-4"><Icon src={IconInfo} /><span>Joined {channel.joinDate}</span></div>
                </div>
            </div>
        </div>
    );
}
