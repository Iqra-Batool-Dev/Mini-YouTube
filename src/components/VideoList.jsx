import VideoCard from "./VideoCard.jsx"


function VideoList({videos}) {

  
  if(videos?.length == 0){
      console.log("videos are" , videos)
      return (
      <div>
        No videos found
      </div>
      )
    }
    else{
      return(
      <div className=' border-amber-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {videos?.map((video)=>(
            <VideoCard video={video} key={video.id}/>
            )
            )}
      </div>
      )
    }
}

export default VideoList
