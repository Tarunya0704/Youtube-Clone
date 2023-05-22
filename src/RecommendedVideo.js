import React from 'react';
import './RecommendeVideo.css';
import VideoCard from './VideoCard';


const RecommendedVideo = () => {
  return (
    <div className='RecommendedVideo'>

    <h2>Recommended</h2>
    <div className='RecommendedVideo__Videos'>
    <VideoCard   
       title= "Become a web devloper "
       views="2.4M"
       timestamp="3 days ago"
       channelImage="https://wallpapercave.com/wp/wp7368071.png"
       channel="Ansh Yadav"
       image="https://static.vecteezy.com/system/resources/previews/000/271/024/original/vector-web-development-web-banner.jpg"
       />
    <VideoCard
    title= "Become a web devloper "
    views="2.4M"
    timestamp="3 days ago"
    channelImage="https://1.bp.blogspot.com/-3QvsAN5mtWk/TtSd9vhc6nI/AAAAAAAAAIE/6HC2Kk3eVbc/s1600/Crayon.Shin-Chan.26543.jpg"
    channel="Ansh Yadav"
    image="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1536x1177.jpg"
    />
    
    <VideoCard
    title= "Become a web devloper "
    views="2.4M"
    timestamp="3 days ago"
    channelImage="https://i.pinimg.com/originals/57/53/74/575374bf227f9845685a2950dd976f88.png"
    channel="Ansh Yadav"
    image="https://static.vecteezy.com/system/resources/previews/000/251/670/original/website-development-concept-modern-flat-design-vector-illustrat.jpg"
    />
  
    <VideoCard 
    title= "Become a web devloper "
    views="2.4M"
    timestamp="3 days ago"
    channelImage="https://3.bp.blogspot.com/-m2Kj0g6R3Fs/Vwl_nALoM2I/AAAAAAAAAEw/fKh_VOYV0X0MO5r0HHiuLO7gQanlu0-zg/s320/shin-chan.jpg"
    channel="Ansh Yadav"
    image="https://www.oso-web.com/wp-content/uploads/2017/08/Web-Development-Connecticut-1.jpg"
    />
    <VideoCard
    title= "Become a web devloper "
    views="2.4M"
    timestamp="3 days ago"
    channelImage="https://wallpapercave.com/wp/wp7368071.png"
    channel="Ansh Yadav"
    image="https://static.vecteezy.com/system/resources/previews/000/271/024/original/vector-web-development-web-banner.jpg"
    />
    
    <VideoCard
    title= "Become a web devloper "
    views="2.4M"
    timestamp="3 days ago"
    channelImage="https://wallpapercave.com/wp/wp7368071.png"
    channel="Ansh Yadav"
    image="https://static.vecteezy.com/system/resources/previews/000/271/024/original/vector-web-development-web-banner.jpg"
    />
    
    
  
    
    </div>
    
    
    </div>
  )
}

export default RecommendedVideo