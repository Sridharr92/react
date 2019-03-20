import React from 'react'

function Conditional(props){
	//condition ? statement if true : statement if false 
	return(
		<div>
			<h1>Navbara</h1>
			{props.isLoading ? <h1>Loading .. </h1> : <h1>Some cool stuff about conditional rendering </h1> }
			<h1>fooder</h1>
		</div>
	)
}

export default Conditional