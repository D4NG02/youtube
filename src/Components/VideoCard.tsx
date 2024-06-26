
export default function VideoCard({ detail }: {
    detail: {
        thumbnail: string,
        channel: string,
        src: string,
        title: string,
        view: number,
        sinceTime: string,
        duration: string
    }
}) {
    return (
        <div>
            <img className="max-w-none w-[120px] h-[90px]" src={detail.thumbnail} alt="thumbnails" />
            <div>
                <h4>{detail.title}</h4>
                <p>icon more</p>
            </div>
            <div>
                <p>{detail.channel}</p>
                <p>{detail.view} ‧ {detail.sinceTime}</p>
            </div>
        </div>
    );
}
