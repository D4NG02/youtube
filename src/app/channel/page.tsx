
import Topbar from "@/Components/Topbar";
import SideBar from "@/Components/sideBar";
import ChannelSection from "./Components/channelSection";

export default function Channel() {

    return (
        <div className="h-full">
            <Topbar />
            <div className="px-4 py-2 h-[calc(100%-40px)] sm:h-[calc(100%-52px)] flex flex-col gap-2 sm:p-2 sm:flex-row">
                <div className="order-2 h-[40px] sm:order-1 sm:w-[54px]">
                    <SideBar />
                </div>
                <div className="content order-1 h-[calc(100%-40px)] sm:order-2">
                    <ChannelSection />
                </div>
            </div>
        </div>
    );
}
