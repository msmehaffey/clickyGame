import React from 'react'
function Score(props) {
	return (
            <li id="score"><h4>Score: {props.current} | Highscore: {props.high}</h4></li>
	)
}

export default Score;