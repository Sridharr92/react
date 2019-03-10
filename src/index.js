import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App'



// class App extends React.Component{
// 	render(){		
// 		return(
// 			<div>
// 				<Header username="sridhar" />
// 				<Greeting />
// 			</div>
// 		)
// 	}
// }



// class Header extends React.Component{
// 	render(){
// 		return(
// 			<header>
// 			 	<p>welcome,{this.props.username} !</p>
// 			</header>
// 		)
// 	}	
// }


// class Greeting extends React.Component{
// 	render(){
// 		const date = new Date()
// 		const hours = date.getHours()
// 		let timeOfDay

// 		if(hours < 12){
// 			timeOfDay ="Morning"
// 		}else if (hours >=12 && hours <17){
// 			timeOfDay = "afternoon"
// 		}else{
// 			timeOfDay = "night"
// 		}
// 		return(
// 			<h1>Good {timeOfDay} to your,sir or madam!</h1>
// 		) 
// 	}
	
// }


ReactDOM.render(<App />, document.getElementById('root'));




