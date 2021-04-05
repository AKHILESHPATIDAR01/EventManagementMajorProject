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
            <h1 style={{textAlign:'center'}}>No of Guests</h1>
            {/* <div>

                <label>No of Guests :-</label>
                <input type="number" placeholder="No of Guests" />
                <button >Submit</button>
            </div> */}
            <div className='bnt-portion'>
            <Link to='/' >
                <button className='prevButtn'>Prev</button>
            </Link>
            <Link to='/steptwo' >
                <button className='nextButtn'>Next</button>
            </Link>
            </div>

            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label>
                    No of Guest:
                    <input type="text" value={value} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <h1 style={{textAlign:'center', marginTop:'30px'}}>No of Guest : {guests} </h1>
            </div>

            
        </div>
    )
}

export default StepOne
