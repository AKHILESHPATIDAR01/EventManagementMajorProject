import React from 'react'
import { Link } from 'react-router-dom'
import invitation from '../../FackData/invitation'
import './stepfive.css';

function StepFive( {total ,setTotal , eCard , setECard} ) {

    const handleSelect = SelectedPhotographer =>{
        console.log(SelectedPhotographer.studio_name); 
            let newItem = SelectedPhotographer;
            console.log(newItem)
            setECard([newItem]);
            setTotal(total+SelectedPhotographer.base_price);
    }

    return (
        <div className="showitems row">
            {/* <p className='heading'>STEP 1 : choose photographer</p> */}

            <h1 style={{textAlign:'center', margin:'50px'}}>Choose E-Invitation Cart</h1>

            <div className='bnt-portion'>
                <Link to='/stepfour' >
                    <button className='prevButtn'>Prev</button>
                </Link>
                <Link to='/cart' >
                    <button className='nextButtn'>Next</button>
                </Link>
            </div>
            
            {invitation.map((item)=>{

                return (

                    <div className="containerTwo">
                        <div className="card" key={item.id}>
                            <div className="imgPortionTwo">
                                <img src={item.img} />
                            </div>
                            <div className="detailsTwo">
                                <div className="g-nameTwo">{item.card_name}</div>
                                {/* <div className="g-location">{item.location}</div> */}
                                {/* <div className="g-capacity">capacity:1000</div> */}
                                
                                <div className="g-blockTwo">
                                    <div className="g-priceTwo">Price:- {item.base_price}</div>
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
                <Link to='/stepfour' >
                    <button className='prevButtn'>Prev</button>
                </Link>
                <Link to='/cart' >
                    <button className='nextButtn'>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default StepFive
