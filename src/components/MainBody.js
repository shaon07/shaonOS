import React, { useEffect, useState } from 'react';
import "../Styles/MainBody.css";
import Header from './Header';
import PostCard from './PostCard';

const MainBody = () => {
  const [dbdata, setData] = useState([]);
  const fetchData =  () =>{
    fetch('http://localhost:5000/data')
    .then(response => response.json())
  .then(json => setData(json))
    
    
  }
  useEffect(()=>{
    fetchData();
    
    
  },[]);
  // console.log(dbdata);
  return (
      <>
          <Header/>
 <div className="mainBody">
    
   {
     dbdata.map((info,ind)=>{
       return (
        <PostCard userInfo={info} key={ind}/>
       )
     })
   }
   </div>
      </>
  
  )
}

export default MainBody
