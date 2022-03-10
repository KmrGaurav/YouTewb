import axios from 'axios';

const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_PRODUCTION_KEY || process.env.REACT_APP_YOUTUBE_LOCAL_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: YOUTUBE_KEY
    }
});