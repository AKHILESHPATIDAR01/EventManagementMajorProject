import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './cart.css';

function Cart( { cartitem , setCartItems , venue , setVenue , total , setTotal ,photos , setPhotos ,guests , updateGuests ,eCard , setECard } ) {

    // const [clickedRemove , setCkickedRemove ] = useState(false);

    const removeFromCart = products =>{
        // console.log(products.dish_name);
        let tempCart = [...cartitem];
        let tempItem = tempCart.filter(item => item.id !== products.id);
        setCartItems(tempItem);
        setTotal(total-products.base_price*guests);
    }

    const removeFromVenue = products =>{
        console.log(products.dish_name);
        let tempCart = [...venue];
        let tempItem = tempCart.filter(item => item.id !== products.id);
        setVenue(tempItem);
        setTotal(total-products.base_price);

    }

    const removeFromPhotos = products =>{
        console.log(products.studio_name);
        let tempCart = [...photos];
        console.log(tempCart);
        let tempItem = tempCart.filter(item => item.id !== products.id);
        setPhotos(tempItem);
        setTotal(total-products.base_price);

    }

    const removeFromECard = products =>{
        // console.log(products.studio_name);
        let tempCart = [...eCard];
        console.log(tempCart);
        let tempItem = tempCart.filter(item => item.id !== products.id);
        setECard(tempItem);
        setTotal(total-products.base_price);

    }


    return (
        <div className='cart-items'>

            <h1 style={{textAlign:'center', margin:'20px'}}>Selected Items</h1>
            <p style={{textAlign:'center'}}>Total : {total}</p>
            {/* <div>
                <h1>Total Amount : {total}</h1>
            </div> */}

            <div className='bnt-portion'>
                <Link to='/stepfive' >
                    <button className='prevButtn'>Prev</button>
                </Link>
                <Link to='/' >
                    <button className='nextButtn'>Home</button>
                </Link>
            </div>


            <div>
                <h1 style={{textAlign : 'center' , fontSize: '30px' , margin: '30px 0' , textTransform : 'uppercase', textDecoration : 'underline' }}>Venue</h1>
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
                <h1 style={{textAlign : 'center' , fontSize: '30px' , margin: '30px 0' , textTransform : 'uppercase' , textDecoration : 'underline'}}>FoodItems</h1>
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
                <h1 style={{textAlign : 'center' , fontSize: '30px' , margin: '30px 0' , textTransform : 'uppercase' , textDecoration : 'underline'}}>invitation Card</h1>
                { photos.length >0 ?
                    <ul>
                    {eCard.map((cd)=>{
                        return(
                            <li>
                                <div className='cart-item-name'>
                                    <p>{cd.card_name}</p>
                                </div>
                                <div className='cart-item-details'>
                                    <p>{cd.base_price}</p>
                                    <button onClick={ ()=>{ removeFromECard(cd)} }>remove</button>
                                </div>
                                
                            </li>
                        );
                    })}
                    </ul>
                :
                <p style={{textAlign : 'center' , fontSize: '20px'}}>No any E-Card selected yet</p>
                }
            </div>

            <div>
                <h1 style={{textAlign : 'center' , fontSize: '30px' , margin: '30px 0' , textTransform : 'uppercase' , textDecoration : 'underline'}}>photographer</h1>
                { photos.length >0 ?
                    <ul>
                    {photos.map((pg)=>{
                        return(
                            <li>
                                <div className='cart-item-name'>
                                    <p>{pg.studio_name}</p>
                                </div>
                                <div className='cart-item-details'>
                                    <p>{pg.base_price}</p>
                                    <button onClick={ ()=>{ removeFromPhotos(pg)} }>remove</button>
                                </div>
                                
                            </li>
                        );
                    })}
                    </ul>
                :
                <p style={{textAlign : 'center' , fontSize: '20px'}}>No any photographer selected yet</p>
                }
            </div>

            <div className='bnt-portion'>
                <Link to='/stepfive' >
                    <button className='prevButtn'>Prev</button>
                </Link>
                <Link to='/' >
                    <button className='nextButtn'>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart
