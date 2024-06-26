import IconButton from "./IconButton";

import IconHome from "@/Media/IconHome.svg";
import IconShort from "@/Media/IconShort.svg";
import IconSubscribetion from "@/Media/IconSubscribetion.svg";

export default function SideBar() {
    return (
        <div role="sibebar" className="h-full flex flex-row gap-2 justify-around sm:flex-col">
            <IconButton className='bg-transparent w-full flex justify-center items-center sm:w-full sm:hover:cursor-pointer' src={IconHome} />
            <IconButton className='bg-transparent w-full flex justify-center items-center sm:w-full sm:hover:cursor-pointer' src={IconShort} />
            <IconButton className='bg-transparent w-full flex justify-center items-center sm:w-full sm:hover:cursor-pointer' src={IconSubscribetion} />
        </div>
    );
}
