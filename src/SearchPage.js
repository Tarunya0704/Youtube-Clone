import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='SearchPage'>

    <div className='searchpage__filter'>
    <TuneOutlinedIcon/>
    <h2> FILTER</h2>
    </div>
    <hr/>

    <ChannelRow 
    image="https://ih0.redbubble.net/image.671102840.7300/flat,1000x1000,075,f.jpg"
    Channel="Shinchan"
    Verified
    subs="1M"
    noOfvideos="999"
    description="THIS IS NOT JUST A CARTOON ITS AN EMOTION"
    />
    <hr/>
    <VideoRow
    views="1.4M"
    subs="400k"
    description="hello there this is my channel"
    timestamp="2 seconds"
    channel="TimePASS"
    title="we are here to have fun"
    image="https://wallpapercave.com/wp/wp4927829.png"
    />


    </div>
  )
}

export default SearchPage