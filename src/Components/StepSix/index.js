import React from 'react'
import { Link } from 'react-router-dom'

function StepSix() {
    return (
        <div>
            <h1>StepSix</h1>
            <Link to='/stepfive' >
                <button>Prev</button>
            </Link>
            <Link to='/' >
                <button>HomePage</button>
            </Link>
        </div>
    )
}

export default StepSix
