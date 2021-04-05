import React from 'react'
import { Link } from 'react-router-dom'
import photographers from '../../FackData/phtographer';

function StepFour(total ,setTotal , photos , setPhotos) {

    const handleSelect = SelectedPhotographer =>{
        console.log(SelectedPhotographer.studio_name);
            let newItem = SelectedPhotographer;
            console.log(newItem)
            setPhotos([newItem]);
            setTotal(total+SelectedPhotographer.base_price);
    }

    return (
        <div className="showitems row">
            <p className='heading'>STEP 1 : choose photographer</p>

            {photographers.map((item)=>{

                return (

                    <div className="containerOne">
                        <div className="card" key={item.id}>
                            <div className="imgPortion">
                                <img src={item.img} />
                            </div>
                            <div className="details">
                                <div className="g-name">{item.studio_name}</div>
                                <div className="g-location">{item.location}</div>
                                {/* <div className="g-capacity">capacity:1000</div> */}
                                
                                <div className="g-block">
                                    <div className="g-price">Price:- {item.base_price}</div>
                                    <button className="btn" onClick={()=> handleSelect(item) }>Select</button>
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
}

export default StepFour
