import Image from 'next/image';

export default function Icon({ src, className }: { src: string, className?: string }) {
    return (
        <Image src={src} alt='icon' className={'w-6 h-6 ' +className} priority />
    );
}
