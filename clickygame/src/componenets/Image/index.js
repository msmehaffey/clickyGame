import React from 'react'
function Image(props) {
	return (
		<img 
			src={props.sourceURL} 
			alt={props.alternateWords} 
			id={props.id} 
			style={
				{
					height: 175, 
					width: 225, 
					margin: 10, 
					border: "5px solid dodgerblue"
				}
			}>
		</img> 
	)
}

export default Image;