import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideo from './RecommendedVideo';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    
    <div className="App">
    <Router>
    
    <Header/>
      <Routes>
         <Route path="/Search/:searchterm" element={<div className='app__page'>
         <SideBar/>
         <SearchPage/>
         </div>}/>
         

         <Route path="/" element={<div className='app__page'>
         <SideBar/>
         <RecommendedVideo/>
         </div>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
