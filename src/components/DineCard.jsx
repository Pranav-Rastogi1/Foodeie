
export default function DineCard({restdata}){
    return (
        <div className="max-w-sm flex-none">
            <a target="_blank" href={restdata.cta.link}>
                <div className="relative">
                <img className="w-80 h-50 " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restdata?.info?.mediaFiles[0]?.url} alt="" />
                <p className="absolute bottom-2 left-2 text-xl text-white z-10 font-bold">{restdata?.info?.name}</p>
                <p className="absolute bottom-2 right-2 text-xl text-white z-10 font-bold">{restdata?.info?.rating?.value}</p>
                <div className="absolute bg-gradient-to-t from-black to-transparent h-16 bottom-0 left-0 right-0"></div>
                </div>
            </a>
        </div> 
    )
}