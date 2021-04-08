import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css';


function HomePage() { 
    return (
        <>
            {/* <p className="para">We are event organizers, our goal to make you feel enjoyable in your loved one's wedding instead of managing all the stuff.</p> */}
            <p className="para">we are here to make your event successful</p>
            {/* <p>For easy we can go to all the things one by one</p> */}
            {/* <p>Please follow the steps to get best things </p>
                <li>1. choose Garden</li>
                <li>2. choose Decoration and Theme</li>
                <li>3. choose Food Stall</li>
                <li>4. choose Dress designer</li>
                <li>5. choose PhotoGraphers</li>
                <li>6. choose Wedding Cards</li>
            
            <button className="btn btn-success">Get Started</button> */}

            <div className='row'>
                <ul class="steps"> 
                    <li>
                        
                        <h3>Step 1</h3>
                        <p>
                            No of <br></br> guest
                        </p>  
                    </li>
                    <li>
                        
                        <h3>Step 2</h3>
                        <p>
                            choose Venue
                        </p>
                        
                    </li>
                    <li>
                        
                        <h3>Step 3</h3>
                        <p>
                            choose Food Stall
                        </p>
                        
                    </li>
                    {/* <li>
                        <h2>04</h2>
                        <h3>Step 4</h3>
                        <p>
                        choose Dress designer
                        </p>
                        
                    </li> */}
                    <li>
                        
                        <h3>Step 4</h3>
                        <p>
                            choose Photo Graphers
                        </p>
                        
                    </li>
                    <li>
                        <h3>Step 5</h3>
                        <p>
                            choose invitation card
                        </p>
                        
                    </li>
            </ul>
            
            </div>
            
            {/* <Link to='/page'>
                <div className="btnn" style={ {cursor : 'pointer'} }>
                    <button className="btn btnnn">Get Started</button>
                </div>
            </Link> */}
            <Link to='/stepone' >
                <button className='getStarted'>GetStarted</button>
            </Link>
        </>
    )
    // return (
    //     <div>
    //         <h1>HomePage</h1>
    //         <Link to='/stepone' >
    //             <button>GetStarted</button>
    //         </Link>
    //     </div>
    // )
}

export default HomePage
