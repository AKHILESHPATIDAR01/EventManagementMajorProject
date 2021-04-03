import React from 'react'
import './cart.css';

function Cart( { cartitem , setCartItems , venue , setVenue  } ) {
    const removeFromCart = products =>{
        // console.log(products.dish_name);
        let tempCart = [...cartitem];
        let tempItem = tempCart.filter(item => item.id !== products.id);
        setCartItems(tempItem);

    }

    const removeFromVenue = products =>{
        // console.log(products.dish_name);
        let tempCart = [...venue];
        let tempItem = tempCart.filter(item => item.id !== products.id);
        setCartItems(tempItem);

    }

    


    return (
        <div className='cart-items'>
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
                                <p>{cartItems.base_price}* <span>100</span></p>
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
        </div>
    )
}

export default Cart