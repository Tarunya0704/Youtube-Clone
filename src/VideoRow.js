import React from 'react';
import './VideoRow.css';

function VideoRow({views,subs,description,timestamp,channel,title,image
})  {
  return (
    
    <div className='VideoRow'>
    <img src={image} alt=""/>
    <div className='VidoeRow_text'>
    <h3> {title}</h3>
    <p className='VideoRow__headline'>
    {channel}.{subs}Subscribers.{views}Views.{timestamp}</p>
    <p className='VideoRow__description'>{description}</p>
    </div>
    </div>
  )
}

export default VideoRow