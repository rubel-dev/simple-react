import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerDetail.css'


const PlayerDetail = (props) => {
     const{name,img,salary,team,playingRoll} = props.player;
     const handlePlayerSelect= props.handlePlayerSelect;
    return (
        <div className='d-flex profile'>
            <div className='profile-img'>
                <img  style={{width:'200px',height:'250px'}} src={img} alt="" />
            </div>
            <div className='profile-details'>
                <h4><span className='text-success'>Name</span> : {name}</h4>
                <p><span className='text-success'>Salary</span> : ${salary}</p>
                <p><span className='text-success'>Team</span>: {team} </p>
                <p><span className='text-success'>Playing Roll</span>: {playingRoll} </p>
                <button onClick={()=>handlePlayerSelect(props.player)} className='btn btn-warning'><FontAwesomeIcon icon={faPlus}/> Select</button>
            </div>
        </div>
    );
};

export default PlayerDetail;