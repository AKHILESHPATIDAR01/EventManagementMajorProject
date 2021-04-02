import React from 'react'
import { Link } from 'react-router-dom'
import './steptwo.css';

import gardensdata from '../../FackData/destinationdata';

function StepTwo( {cartitem , setCartItems } ) {

    const handleSelect =(e) =>{
        console.log(e.target.key);
    }

    return (
        <div className="showitems row">
            <p className='heading'>STEP 1 : choose Garden</p>

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
                                    <button className="btn" onClick={handleSelect}>Select</button>
                                </div>
                                
                            </div> 
                        </div>
                    </div>

                );
            
            })}
            
            <Link to='/stepone' >
                <button>Prev</button>
            </Link>
            <Link to='/stepthree' >
                <button>Next</button>
            </Link>
        </div>
    )
    
    // return (
    //     <div>
    //         <h1>StepTwo</h1>
    //         <Link to='/stepone' >
    //             <button>Prev</button>
    //         </Link>
    //         <Link to='/stepthree' >
    //             <button>Next</button>
    //         </Link>
    //     </div>
    // )
}

export default StepTwo
