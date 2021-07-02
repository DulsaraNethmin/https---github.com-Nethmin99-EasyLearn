import Lessons from '../component/Lossons';
import {useHistory} from 'react-router-dom';
import {useEffect,useState} from 'react';
import Navbar from '../component/Navbar/Navbar';
import Commiunity from '../component/community/Community';
import LessonBar from '../component/LessonBar/LessonBar';
import './HomeStu.css';

const HomeStu=()=>
{
    const history=useHistory(); 
    let teacher='brad';
    return(
            <>
                <Navbar/>
                <div className='home'>
                    <LessonBar id='lessons'/>
                    <Commiunity/>
                </div>
            </>
    ) ;  
}

export default HomeStu;