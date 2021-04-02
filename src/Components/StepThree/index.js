import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './stepthree.css';
import foodstall from '../../FackData/foodstalldata';


function StepThree() {
    // const [isChecked , setIsChecked] = useState(false);

    // const handleCheck= ()=>{
    //     setIsChecked(isChecked == false ? true : false);
    //     console.log(isChecked);
    // }

    console.log(foodstall);
    return (
        <div>
            <h1>StepThree</h1>

            <div>
                {foodstall.map((foodstalls)=>{
                    return(
                        <div key={foodstalls.id}>
                           
                                <h1>{foodstalls.catagory_name}</h1>
                                <ul className="ks-cboxtags">
                                    {foodstalls.food_items.map((items)=>{
                                        return(
                                            // <li><input type="checkbox"  id={items.id} value={items.dish_name} key={items.id} onChange={handleCheck} defaultChecked={isChecked} /><label htmlFor={items.id}>{items.dish_name} <span>{items.base_price}</span></label></li>
                                            <li><input type="checkbox"  id={items.id} value={items.dish_name} key={items.id} /><label htmlFor={items.id}>{items.dish_name} <span>{items.base_price}</span></label></li>

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

            <Link to='/steptwo' >
                <button>Prev</button>
            </Link>
            <Link to='/stepfour' >
                <button>Next</button>
            </Link>
        </div>
    )
}

export default StepThree
