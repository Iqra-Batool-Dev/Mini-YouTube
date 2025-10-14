import { Link } from "react-router-dom"


function VideoCard({video}) {

    const {id , snippet , statistics }= video

    console.log(video)
    console.log("this is video card")
  return (
    <div className=" flex flex-col ">
      <Link to={`/video/${id}`}>
      <div className=" relative">
        <img src={snippet?.thumbnails?.medium?.url} alt="this is video" className='' />
        <span className="absolute bottom-[3px] right-[3px] p-[2px] bg-black/50 text-white text-[0.8rem]">05:45</span>
      </div>
      </Link>

    <Link to={`/video/${id}`}>
      <div className=" video_title text-[0.9rem] line-clamp-1 ">
            {snippet?.title}
      </div>
      <div className=" video_details">
            video details
      </div>

      <div className=" video_channel">
        views are
            {statistics.viewsCount}
      </div>
    </Link>
    </div>
  )
}

export default VideoCard
