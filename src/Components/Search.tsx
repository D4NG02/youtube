
import IconSearch from "@/Media/IconSearch.svg";
import IconButton from '@/Components/IconButton';

export default function Search() {
    return (
        <form className='flex sm:border-[1px] sm:border-[#ccc] sm:border-solid sm:rounded-full'>
            <input className='hidden px-3 py-1 rounded-full sm:block' placeholder='Search' />
            <IconButton src={IconSearch} className='h-inherit rounded-full sm:ps-3 sm:pe-2 sm:rounded-s-none bg-transparent sm:bg-[#f8f8f8]' />
        </form>
    );
}
