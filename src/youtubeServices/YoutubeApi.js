import axios from "axios";
import config from '../config/youtubeConfig.js'

const BASE_URL = 'https://www.googleapis.com/youtube/v3'

export const fetchTrendingVideos = async ()=>{
    try {
        const res = await axios.get(`${BASE_URL}/videos`, {
            params:{
                part : 'snippet , contentDetails, statistics',
                chart : 'mostPopular',
                maxResults: 20,
                key: config.YOUTUBE_API_KEY
            }
        })
        // console.log(res)
        return res.data.items
    } catch (error) {
        return error
    }
}

export const searchVideos = async (query)=>{
    try {
        const res = await axios.get(`${BASE_URL}/search`, {
            params:{
                part:'snippet, contentDetails, statistics ',
                q: query,
                type: 'videos',
                maxResults: 20,
                key: config.YOUTUBE_API_KEY
            }
        })
        console.log(res)
        return res.data.items
    } catch (error) {
        return error
    }
}

export const fetchVideoById = async(videoId)=>{
    try {
        const res = await axios.get(`${BASE_URL}/videos`,{
            params: {
                part : 'snippet, contentDetails, statistics',
                id: videoId,
                key: config.YOUTUBE_API_KEY
            }
        })
        return res.data.items[0]
    } catch (error) {
        return error
    }
}