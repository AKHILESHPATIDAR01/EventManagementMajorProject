import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './steptwo.css';

import gardensdata from '../../FackData/destinationdata';

function StepTwo( { venue , setVenue ,total ,setTotal,venuePrice, setvenuePrice } ) {

    const [prvPrice , setPrvPrice] = useState(0);

    const handleSelect = Selectedvenue =>{
        if(venue.length==0){ 
            let newItem = Selectedvenue;
            setVenue([newItem]);
            setTotal(total+Selectedvenue.base_price);
            setPrvPrice(newItem.base_price);
            alert("Item is added");
        }
        else{
            console.log("vanue previous price ",prvPrice);
            setTotal(total-prvPrice);
            let newItem = Selectedvenue;
            setVenue([newItem]);
            setTotal(total+Selectedvenue.base_price);
            alert("Item is added after removing prious");
        }
    }

    return (
        <div className="showitems row">
            {/* <p className='heading'>STEP 1 : choose Garden</p> */}
            <h1 style={{textAlign:'center', margin:'50px'}}>Choose Garden</h1>

            <div className='bnt-portion'>
                <Link to='/stepone' >
                    <button className='prevButtn'>Prev</button>
                </Link>
                <Link to='/stepthree' >
                    <button className='nextButtn'>Next</button>
                </Link>
            </div>

            {gardensdata.map((item)=>{
 
                return ( 

                    <div className="containerOne">
                        <div className="card" key={item.id}>
                            <div className="imgPortion">
                                <img src={item.img} />
                            </div>
                            <div className="details">
                                <div className="g-name">{item.garden_name}</div>
                                <div className="g-location">{item.location}</div>
                                <div className="g-capacity">capacity:1000</div>
                                
                                <div className="g-block">
                                    <div className="g-price">Price:- {item.base_price}</div>
                                    <button className="btn-selected" onClick={()=>{ handleSelect(item)} }>Select</button>
                                </div>
                                
                            </div>  
                        </div>
                    </div>

                );
            
            })}
            

            <div className='bnt-portion'>
                <Link to='/stepone' >
                    <button className='prevButtn' >Prev</button>
                </Link>
                <Link to='/stepthree' >
                    <button className='nextButtn'>Next</button>
                </Link>
            </div>
        </div>
    )
    
}

export default StepTwo
