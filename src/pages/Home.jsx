import { useState, useEffect } from "react"
import { fetchTrendingVideos, searchVideos } from "../youtubeServices/YoutubeApi.js"
import CategoryBar from "../components/CategoryBar/CategoryBar.jsx"
import VideoList from "../components/VideoList.jsx"

function Home() {
  const [videos , setVideos] = useState([])
  const [selectedCategory , setSelectedCategory] = useState('All')

  useEffect(()=>{
    
      const getVideos = async ()=> {
        let data
        try {
          if(selectedCategory == 'All'){
            data = await fetchTrendingVideos()
          }
          else{
            data = await searchVideos(selectedCategory)
            console.log(data)
          }
        } catch (error) {
          console.error('failed to fetch videos', error)
        }
        setVideos(data)
      }
      getVideos()
  }, [selectedCategory])



  return (
    <div className=" w-full p-2">

      <CategoryBar 
        selectedCategory= {selectedCategory}  
        onselect={setSelectedCategory} />

      {videos? (<div>
        <VideoList videos = {videos}/> 
      </div>) : (<h1>loading</h1>)}
    </div>
  )
}

export default Home
