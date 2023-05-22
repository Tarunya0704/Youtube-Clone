import React from 'react';
import './SideBar.css';
import SideBarRow from './SideBarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const SideBar = () => {
  return (
    <div className='Sidebar'>
   
    <SideBarRow selected Icon={HomeIcon} tittle= "Home"/>
    <SideBarRow    Icon= { WhatshotIcon} tittle= "Trending"  />
    <SideBarRow  Icon={SubscriptionsIcon}    tittle =  "Subscription"  />
    <hr/>
    <SideBarRow selected Icon={VideoLibraryIcon} tittle= "Library"/>
    <SideBarRow selected Icon={HistoryIcon} tittle= "History"/>
    <SideBarRow selected Icon={OndemandVideoIcon} tittle= "Your Videos"/>
    <SideBarRow selected Icon={WatchLaterIcon } tittle= "Watch Later"/>
    <SideBarRow selected Icon={ThumbUpAltOutlinedIcon} tittle= "Liked Videos"/>
     <SideBarRow selected Icon={ExpandMoreOutlinedIcon} tittle= "Show More"/>
    <hr/>
    

    </div>
  )
}

export default SideBar