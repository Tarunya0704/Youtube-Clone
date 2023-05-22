import React from 'react';

import './SideBarRow.css';

function SideBarRow({ Icon , tittle , selected}) {
  return (
    <div className={'sidebarRow ${selected && "selected" }'}>
    
     <Icon className=  'SideBar__icon'  />

    <h2 className='SideBarRow__tittle'>{tittle}</h2>
    </div>


  )
}

export default SideBarRow