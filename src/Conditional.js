import React from 'react'

function Conditional(props){
	if(props.isLoading === false){
		return(
			<h1>Loading...</h1>
		)
	}else{
		return(
			<h1>Some cool stuff about conditional</h1>
		)
	}
}

export default Conditional