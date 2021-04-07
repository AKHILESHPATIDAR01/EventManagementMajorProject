import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import photographers from '../../FackData/phtographer';

function StepFour( {total ,setTotal , photos , setPhotos} ) {

    // const handleSelect = SelectedPhotographer =>{
    //     console.log(SelectedPhotographer.studio_name); 
    //         let newItem = SelectedPhotographer;
    //         console.log(newItem)
    //         console.log(photos); 
    //         setPhotos([newItem]);
    //         setTotal(total+SelectedPhotographer.base_price);
    // }
    const [prvPrices , setPrvPrices] = useState(0);

    const handleSelect = Selectedphotographer =>{
        if(photos.length == 0){ 
            let newItem = Selectedphotographer;
            setPhotos([newItem]);
            setTotal(total+Selectedphotographer.base_price);
            setPrvPrices(newItem.base_price);
            alert("Item is added");
        }
        else{
            console.log("vanue previous price ",prvPrices);
            setTotal(total-prvPrices);
            let newItem = Selectedphotographer;
            setPhotos([newItem]);
            setTotal(total+Selectedphotographer.base_price);
            alert("Item is added after removing prious");
        }
    }

    return (
        <div className="showitems row">
            {/* <p className='heading'>STEP 1 : choose photographer</p> */}

            <h1 style={{textAlign:'center', margin:'50px'}}>Choose Photographer</h1>

            <div className='bnt-portion'>
                <Link to='/stepthree' >
                    <button className='prevButtn'>Prev</button>
                </Link>
                <Link to='/stepfive' >
                    <button className='nextButtn'>Next</button>
                </Link>
            </div>
            
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
                                    <button className="btn" onClick={()=> {handleSelect(item)} }>Select</button>
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
            <div className='bnt-portion'>
                <Link to='/stepthree' >
                    <button className='prevButtn'>Prev</button>
                </Link>
                <Link to='/stepfive' >
                    <button className='nextButtn'>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default StepFour
