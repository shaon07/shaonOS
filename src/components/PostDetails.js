import FacebookIcon from '@material-ui/icons/Facebook';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../Styles/postDetails.css';
import Header from './Header';



const PostDetails = () =>{
    
    const {id} = useParams();
   
    const [dbdata, setData] = useState([]);
    
  useEffect(()=>{
    fetchData();   
  },[]);

  const fetchData =  () =>{
    fetch(`http://localhost:5000/data/${id}`)
    .then(response => response.json())
  .then(json => setData(json))
 
    
  }

 
  

    return (
        <PostInterface dbdata={dbdata}/>
    )
}
const PostInterface = ({dbdata}) =>{
   
    // const [clink,setClink] = useState();
    const mainId = "class";
    const [mainId2,setMainId2] = useState(1);
    const [finalLInk,setFinalLink] = useState('');
    const [totalList,setTotalList] = useState(1);
    const [classArr,setClassArr] =useState([]);
    const [playListTitle,setPlayListTitle] =useState("Load PlayList")
    
    

    const updateID =()=>{
        if(mainId2===Object.keys(dbdata.playList).length){
            alert("congratulations You Have Succesfully Complete the playlist");
        }else{
        setMainId2(mainId2+1);}
        console.log(Object.keys(dbdata.playList).length);
        setTotalList(Object.keys(dbdata.playList).length);
        console.log(Object.keys(dbdata.playList));

        
    }
    const backdateID = () =>{
        if(mainId2===1){
            
            alert("There is no previous class available");
            setMainId2(1);
        }else{
            setMainId2(mainId2-1);}
    }
    useEffect(()=>{
        setTimeout(() => {
            console.log(dbdata.playList.class1);
            console.log("hello",dbdata.playList[`${mainId}${mainId2}`]);
            setFinalLink(dbdata.playList[`${mainId}${mainId2}`]);
            setTotalList(Object.keys(dbdata.playList).length);

         
            
        console.log(classArr)
        }, 500);
       },[dbdata,updateID,backdateID]);

       const loadData = ()=>{
        setTimeout(()=>{
            setClassArr(Object.keys(dbdata.playList));
            console.log(classArr);
            setPlayListTitle("Total PlayList")
        })
       }
       
    return (
        <div>
           <Header/>
           <div className="p-5 postDetails">
               <div className="w-100">
                   <h1>{dbdata.CourseName}</h1>
                   <h5>{dbdata.Details}</h5>
                   <h3>5 Students Enrolled</h3>
                   <div>
                       <span>Share with <FacebookIcon /></span>

                   </div>
               </div>
               <div style={{height:"50vh"}}>
               <iframe className="postVideo" src={`https://www.youtube.com/embed/${finalLInk}`}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
               </div>
           </div>
           <div className="contentBox">
           <div className="px-5 postContainer">
               <div className="py-4 auther">
               <Card  >
                    <Card.Img variant="top" src={dbdata.image} />
                    <Card.Body>
                        <Card.Title>{dbdata.AutherName}</Card.Title>
                        <Card.Text>
                        {dbdata.channelDetail}
                        </Card.Text>
                       {/* <Link to={dbdata.link}> 
                        // <a href="#action">Visit</a>
                       </Link> */}
                       <a href={dbdata.link} target="_blank" rel="noreferrer noopener">Contact With Creator</a>
                    </Card.Body>
                    </Card>
               </div>
               <div className="pt-3 buttonBox">
                   <h2 style={{color:"white"}}>PlayLists <span>{mainId2}/{totalList}</span> </h2>
                   <Button  endIcon={<SkipPreviousIcon />} className="mx-1 btn1"  variant="contained" onClick={()=>backdateID()}>Previous Class</Button>
                   <Button startIcon={<SkipNextIcon />} className="mx-1" variant="contained" onClick={()=>updateID()} >Next Class</Button>

                    <div className='playlistStyle'>
                      <h3>
                          {
                              (function shaon(){
                                if(!classArr.length===0){
                                    return(
                                        <h4>{playListTitle}</h4>
                                    )
                                }else{
                                    return (
                                        <h4
                                        onClick={()=>loadData()}
                                        className='btn btn-outline m-1  playListButton'>{playListTitle}</h4>
                                    )
                                }
                            }())
                              
                          }
                      </h3>
                      {
                        classArr.map((elem,ind)=>{
                            return (
                                <h5 onClick={()=>setMainId2(ind+1)} className='btn btn-outline m-1 playListChip' >{elem}</h5>
                            )
                        })
                     }
                    </div>
                   
               </div>

               
           </div>
           </div>
        </div>
    )
}

export default PostDetails;