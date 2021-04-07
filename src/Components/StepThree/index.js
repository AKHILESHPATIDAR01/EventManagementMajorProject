import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './stepthree.css';
import foodstall from '../../FackData/foodstalldata';


function StepThree( {cartitem , setCartItems , total , setTotal ,guests , updateGuests} ) {

    const addToCart = products =>{ 
        // setCartItems(e.target.) 
        console.log(products.dish_name);
        let tempCart = [...cartitem];
        let tempItem = tempCart.find(item => item.id === products.id);

        if(!tempItem){
            let newItem = products;
            setCartItems( [...cartitem , newItem] );
            setTotal(total+newItem.base_price*guests);
        }
        else{
            alert("Product already added");
        }

    }


    console.log(foodstall);
    return (
        <div>
            <h1 style={{textAlign:'center', margin:'50px'}}>Choose FoodStalls</h1>

            <div className='bnt-portion'>
                <Link to='/steptwo' >
                    <button className='prevButtn'>Prev</button>
                </Link>
                <Link to='/stepfour' >
                    <button className='nextButtn'>Next</button>
                </Link>
            </div>


            <div>
                {foodstall.map((foodstalls)=>{
                    return(
                        <div key={foodstalls.id}>
                           
                                <h1 style={{textAlign:'center', margin:'50px' , textDecoration: 'underline'}}>{foodstalls.catagory_name}</h1>
                                {/* <ul className="ks-cboxtags"> */}
                                <ul className="cbox">
                                    {foodstalls.food_items.map((items)=>{
                                        return(
                                            <>
                                            <li>
                                                <div className="foodStall" key={items.id}>
                                                    <h1>{items.dish_name}</h1>
                                                    <div className='foodStall-right'>
                                                        <p>{items.base_price}</p>
                                                        <button onClick={ ()=>{ addToCart(items)} }>Select</button>
                                                    </div>
                                                </div>
                                            </li>

                                            </>
                                        );
                                    })}
                                 </ul>
                            
                        </div>

                    );
                })}

                {/* <ul class="ks-cboxtags">
                <li><input type="checkbox" id="checkboxOne" value="Rainbow Dash" /><label for="checkboxOne">Rainbow Dash <span>₹10</span></label></li>
                </ul> */}
            </div>

            <div className='bnt-portion'>
                <Link to='/steptwo' >
                    <button className='prevButtn'>Prev</button>
                </Link>
                <Link to='/stepfour' >
                    <button className='nextButtn'>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default StepThree
