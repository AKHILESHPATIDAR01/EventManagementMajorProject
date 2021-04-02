import React from 'react'
import { Link } from 'react-router-dom'

function StepFour() {
    return (
        <div>
            <h1>StepFour</h1>
            <Link to='/stepthree' >
                <button>Prev</button>
            </Link>
            <Link to='/stepfive' >
                <button>Next</button>
            </Link>
        </div>
    )
}

export default StepFour
