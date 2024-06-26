
import Search from './Search';
import IconButton from './IconButton';

import IconHamburger from "@/Media/IconHamburger.svg";
import IconYoutube from "@/Media/IconYoutube.svg";
import IconMicrophone from "@/Media/IconMicrophone.svg";
import IconCreate from "@/Media/IconCreate.svg";
import IconBell from "@/Media/IconBell.svg";
import IconUser from "@/Media/IconUser.svg";

export default function Topbar() {
    return (
        <div className='px-4 py-2 flex flex-row justify-between'>
            <div className='flex flex-row sm:gap-3 items-center'>
                <IconButton className='hidden bg-transparent sm:block sm:hover:cursor-pointer' src={IconHamburger} />
                <IconButton className='w-[90px] h-[20px] p-0 bg-transparent' src={IconYoutube} />
            </div>
            <div className='hidden sm:flex sm:flex-row sm:gap-3 items-center'>
                <Search />
                <IconButton className='rounded-full sm:hover:cursor-pointer' src={IconMicrophone} />
            </div>
            <div className='flex flex-row gap-3 items-center'>
                <div className='block sm:hidden'>
                    <Search />
                </div>
                <IconButton className='text-[#065fd4] bg-transparent hidden sm:block' src={IconCreate} />
                <IconButton className='text-[#065fd4] bg-transparent hidden sm:block' src={IconBell} />
                <IconButton className='text-[#065fd4] bg-transparent' src={IconUser} />
            </div>
        </div>
    );
}
