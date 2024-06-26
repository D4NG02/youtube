import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function Popup({ children, onClose }: { children: ReactNode, onClose: () => void }) {
    return (
        <>
            {createPortal(
                <div onClick={onClose} className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-md'>
                    <div className='p-5 bg-white w-10/12 md:w-1/2 lg:w-1/3 shadow-inner rounded-lg'>
                        <div className='w-full justify-center items-center relative'>
                            {children}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
