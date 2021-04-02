import React from 'react'
import { Link } from 'react-router-dom'

function StepOne() {
    return (
        <div>
            <h1>StepOne</h1>
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
