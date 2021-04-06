import React, { useState } from 'react'
import './cart.css';

function Cart( { cartitem , setCartItems , venue , setVenue , total , setTotal ,photos , setPhoto ,guests , updateGuests } ) {

    // const [clickedRemove , setCkickedRemove ] = useState(false);

    const removeFromCart = products =>{
        // console.log(products.dish_name);
        let tempCart = [...cartitem];
        let tempItem = tempCart.filter(item => item.id !== products.id);
        setCartItems(tempItem);
        setTotal(total-products.base_price);
    }

    const removeFromVenue = products =>{
        console.log(products.dish_name);
        let tempCart = [...venue];
        let tempItem = tempCart.filter(item => item.id !== products.id);
        setVenue(tempItem);
        setTotal(total-products.base_price);

    }

    
    return (
        <div className='cart-items'>
            <div>
                <h1>Total Amount : {total}</h1>
            </div>

            


            <div>
                <h1 style={{textAlign : 'center' , fontSize: '30px' , margin: '30px 0' , textTransform : 'uppercase'}}>Venue</h1>
                { venue.length >0 ?
                    <ul>
                    {venue.map((gd)=>{ 
                        return(
                            <li>
                                <div className='cart-item-name'>
                                    <p>{gd.garden_name}</p>
                                </div>
                                <div className='cart-item-details'>
                                    <p>{gd.base_price}</p>
                                    <button onClick={ ()=>{ removeFromVenue(gd)} }>remove</button>
                                </div>
                                
                            </li>
                        );
                    })}
                    </ul>
                :
                <p style={{textAlign : 'center' , fontSize: '20px'}}>No any Venue selected yet</p>
                }
            </div>

            <div>
                <h1 style={{textAlign : 'center' , fontSize: '30px' , margin: '30px 0' , textTransform : 'uppercase'}}>FoodItems</h1>
                {cartitem.length > 0 ?
                <ul >
                { cartitem.map((cartItems)=>{
                    
                    return(
                        <li>
                            <div className='cart-item-name'>
                                <p>{cartItems.dish_name}</p>
                            </div>
                            <div className='cart-item-details'>
                                <p>{cartItems.base_price}* <span>{guests}</span> = {cartItems.base_price*guests} </p>
                                <button onClick={ ()=>{ removeFromCart(cartItems)} }>remove</button>
                            </div>
                            
                        </li>
                    );
                
                })}
                </ul>
                :  
                    <p style={{textAlign : 'center' , fontSize: '20px'}}>No any food Item selected yet</p>
                } 
            </div>

            <div>
                <h1 style={{textAlign : 'center' , fontSize: '30px' , margin: '30px 0' , textTransform : 'uppercase'}}>photographer</h1>
                { photos.length >0 ?
                    <ul>
                    {venue.map((pg)=>{
                        return(
                            <li>
                                <div className='cart-item-name'>
                                    <p>{pg.studio_name}</p>
                                </div>
                                <div className='cart-item-details'>
                                    <p>{pg.base_price}</p>
                                    <button onClick={ ()=>{ removeFromVenue(pg)} }>remove</button>
                                </div>
                                
                            </li>
                        );
                    })}
                    </ul>
                :
                <p style={{textAlign : 'center' , fontSize: '20px'}}>No any Venue selected yet</p>
                }
            </div>

            <div>
                <h1 style={{textAlign : 'center' , fontSize: '30px' , margin: '30px 0' , textTransform : 'uppercase'}}>invitation Card</h1>
                { photos.length >0 ?
                    <ul>
                    {venue.map((pg)=>{
                        return(
                            <li>
                                <div className='cart-item-name'>
                                    <p>{pg.studio_name}</p>
                                </div>
                                <div className='cart-item-details'>
                                    <p>{pg.base_price}</p>
                                    <button onClick={ ()=>{ removeFromVenue(pg)} }>remove</button>
                                </div>
                                
                            </li>
                        );
                    })}
                    </ul>
                :
                <p style={{textAlign : 'center' , fontSize: '20px'}}>No any Venue selected yet</p>
                }
            </div>
        </div>
    )
}

export default Cart