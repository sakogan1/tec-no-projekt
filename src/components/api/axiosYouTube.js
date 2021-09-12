import axios from 'axios';
const KEY = 'AIzaSyARimT6E-advpSdYKisg88MC7kOwwlEf1Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: KEY
    }
})