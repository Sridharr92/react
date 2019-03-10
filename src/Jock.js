import React from 'react';

function Joke(props){
	return(

		<div>
		  <h3 style={{color:!props.punchLine && "red",display:props.question ? "block" : "none"}}> Question:{props.question}</h3>
		  <h3 style={{color:!props.question && "#888888", display:props.punchLine ? "block" : "none"}}>Answer:{props.punchLine}</h3>
		  <hr />
		</div>
	)
}
export default Joke