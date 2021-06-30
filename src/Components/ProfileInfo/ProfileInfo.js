import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import data from '../../fakeData/fakeData.json'
import PlayerDetail from './../PlayerDetail/PlayerDetail';
import './ProfileInfo.css'
import Cart from './../Cart/Cart';

const ProfileInfo = () => {
const [players, setPlayers] = useState([]); 
const [cart , setCart] = useState([]); 
    useEffect(()=>{
         setPlayers(data)
    },[]) 
    const handlePlayerSelect =(player)=>{
        const newCart = [...cart,player];
        setCart(newCart)
    }
    return (
        <div className='container d-flex'>
           <div className="profile-info">
               {
                    players.map(player =><PlayerDetail player={player} handlePlayerSelect={handlePlayerSelect}></PlayerDetail>)
                }
           </div>
           <div className="cart">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default ProfileInfo;