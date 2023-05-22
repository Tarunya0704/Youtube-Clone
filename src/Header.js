import React , {useState }from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import {Link} from "react-router-dom";

const Header = () => {
  const[inputSearch ,setInputSearch]= useState('');



  return (
    <div className='Header'>
       <div className='Header__left'>
          <MenuIcon/>
           <Link to="/">
              <img  className='Header__logo'
              src='https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg' alt=''/>
            </Link>
    </div>

    <div className='Header__input'>
    <input  onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search'  type='text'/>

    <Link to={'/search/${inputSearch}'}>
    <SearchIcon  className='Header__inputBotton'/>
    </Link>
    </div>


    <div className='Header__icon'>
    <VideoCallIcon/>
    <AppsIcon/>
    <NotificationsIcon/>
    <Avatar alt="Remy Sharp" src="https://wallpapercave.com/wp/wp1812462.jpg" />
    </div>
    
    </div>
  )
}

export default Header