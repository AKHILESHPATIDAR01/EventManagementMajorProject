import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function StepOne( {guests , updateGuests} ) {
    const  [value , setValue] = useState(0);

    const handleChange = (e)=>{
        if(e.target.value <= 2000){
            setValue(e.target.value);
        }
        else{
            alert("No of Guests between 0 to 2000");
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(value <= 2000){
            updateGuests(value);
            setValue(0);
        }
        
    }


    return (
        <div>
            <h1>StepOne</h1>
            {/* <div>

                <label>No of Guests :-</label>
                <input type="number" placeholder="No of Guests" />
                <button >Submit</button>
            </div> */}

            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={value} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <h1>No of Guest : {guests} </h1>
            </div>

            <Link to='/' >
                <button>Prev</button>
            </Link>
            <Link to='/steptwo' >
                <button>Next</button>
            </Link>
        </div>
    )
}

export default StepOne
