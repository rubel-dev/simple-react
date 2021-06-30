import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,player)=>total + player.salary,0)
    let selectedPlayer = cart;
    if(cart.length > 0){
        selectedPlayer = cart[cart.length-1];
    } 
    
    return (
        <div>
            <h4>total selected player : {cart.length}</h4>
            <p><span className='text-success'>Name</span> : {selectedPlayer.name}</p>
            <p><span className='text-success'>Salary</span> : {selectedPlayer.salary}</p>
            <p><span className='text-success'>total</span> : {total}</p>
        </div>
    );
};

export default Cart;