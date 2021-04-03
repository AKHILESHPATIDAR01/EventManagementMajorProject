import React from 'react'
import { Link } from 'react-router-dom'
import './steptwo.css';

import gardensdata from '../../FackData/destinationdata';

function StepTwo( { venue , setVenue } ) {

    const handleSelect = Selectedvenue =>{
        console.log(Selectedvenue.garden_name);
        // let tempCart = [...venue];
        // let tempItem = tempCart.find(item => item.id === Selectedvenue.id);

        // if(!tempItem){
            let newItem = Selectedvenue;
            setVenue([newItem]);
        // }
        
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
                                    <button className="btn" onClick={()=>{ handleSelect(item)} }>Select</button>
                                </div>
                                
                            </div> 
                        </div>
                    </div>

                );
            
            })}
            

            {/* <div>
                {venue.map((gd)=>{
                    return(
                        <h1>{gd.garden_name}</h1>
                    );
                })}
            </div> */}
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
