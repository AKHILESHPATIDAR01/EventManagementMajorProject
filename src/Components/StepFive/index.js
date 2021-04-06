import React from 'react'
import { Link } from 'react-router-dom'

function StepFive() {
    return (
        <div>
            <h1>StepFive</h1>
            <Link to='/stepfour' >
                <button>Prev</button>
            </Link>
            <Link to='/cart' >
                <button>Cart</button>
            </Link>
        </div> 
    )
}

export default StepFive
