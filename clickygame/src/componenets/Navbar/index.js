import React from 'react'
import Title from '../Title'
import Instruction from '../Instruction'
import Score from '../Score'

const navStyle = {
    backgroundColor: "dodgerblue",
    color: "white",
    height: "75px",
    width: "100%",
    position: "fixed",
    paddingTop: "25px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"


}
function Navbar(props) {
	return (
        <div>
        <ul class="nav nav-pills nav-fill" style={navStyle}> 

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