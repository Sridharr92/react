import React from 'react'

function Todoitem(props){
	return(
		<div className="todo-item">
			<input 
				type="checkbox" 
				checked={props.item.completed} 
				onMouseOver={() => alert("changed")}
			/>
			<p>{props.item.text}</p>
		</div>
	)
}

export default Todoitem