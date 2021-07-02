import React from 'react';
import './WelcomeBatch.css';
import {useHistory} from 'react-router-dom';

const WelcomeBatch=()=>
{
    const history =useHistory();
    return(
        <div id='top' onClick={(e)=>{history.push('/login')}}>
            EasyLearn
        </div>
    )
}

export default WelcomeBatch;