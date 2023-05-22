import React from 'react';
import "./ChannelRow.css";
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlined';

function ChannelRow({image,Channel,Verified,subs,noOfvideos,description}) {
  return (
    <div className='ChannelRow'>
    <Avatar className="channelRow__logo" alt={Channel} src={image}/>
    <div className='channelRow__text'>
    <h4>
    {Channel} { Verified && <VerifiedIcon />} 
    </h4>
    <p>
    
    </p>
    {subs}subscribers.{noOfvideos}videos
    <p>
    {description}
    </p>
    </div>
    
    
    </div>
  )
}

export default ChannelRow