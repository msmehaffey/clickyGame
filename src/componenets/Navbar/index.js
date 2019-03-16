import React from 'react'
import Title from '../Title'
import Instruction from '../Instruction'
import Score from '../Score'

function Navbar(props) {
	return (
        <div>
        <ul class="nav nav-pills nav-fill" id="navigationBar"> 

            <li class="nav-item"> 
                <Title/>
            </li> 

            <li class="nav-item"> 
                <Instruction instruction={props.instruction}/>
            </li> 

            <li class="nav-item"> 
                <Score current={props.current} high={props.high}/>
            </li> 
        </ul>
        </div>
	)
}

export default Navbar;