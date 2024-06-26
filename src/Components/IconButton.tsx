import Image from 'next/image';

export default function IconButton({ src, className }: { src: string, className?: string }) {
    const padding = className?.includes('p-')?'':' sm:p-[6px] sm:w-9'
    const bgColor = className?.includes('bg-')?'':' bg-[#f8f8f8]'
    return (
        <button className={className + padding + bgColor + ' h-full'}>
            <Image className='flex flex-row content-center text-[#212121] sm:hover:cursor-pointer' src={src} alt='icon' />
        </button>
    );
}
