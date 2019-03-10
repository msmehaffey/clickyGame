import React from 'react'
function Navbar(props) {
	return (
            <nav className="blue">
                <div className="nav-wrapper">
                <div className="container">
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Dodger Memory Game</a></li>
                        <li><a href="badges.html"> Click to Begin </a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
                </div>
            </nav> 
	)
}

export default Navbar;