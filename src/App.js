import React,{Component} from 'react';
// import './App.css';
// import Joke from './Jock';
// import jokesData from './jokesData';
// import Product from './Product';
// import vschoolProducts from './vschoolProducts';
// import Todoitem from './Todoitem';
// import todoData from './todoData'  
// import Conditional from './Conditional'


// https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Global_objects/Arrary/filter

// https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Global_objects/Arrary/map

// https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Global_objects/Arrary/sort

// https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Global_objects/Arrary/reduce

// https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Global_objects/Arrary/every

// https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Global_objects/Arrary/some

// https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Global_objects/Arrary/find


// https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Global_objects/Arrary/findIndex



// function App(){
  
//     const jokeComponents = jokesData.map( joke => <Joke key={joke.id} question = {joke.question} punchLine ={joke.punchLine}/> ) 
//     const productComponents = vschoolProducts.map(item => <Product key={item.id} product={item} />)
//     const todoitem = todoData.map(item => <Todoitem key={item.id} item={item} />)
//  return(
//    <div>
      
//      {jokeComponents}
//      {productComponents}
//      {todoitem}
//    </div>
//  )
// }

// Second prog
// class App extends React.Component{
//   yourMethodHere(){

//   }

//   render(){
//     const date = new Date();
//     return(
//         <div>
//               <h1>{this.props.whatever}</h1>  
//         </div>
//     )
//   }
// }

//Second prog

// class App extends Component{
//   constructor(){
//     super()
//     this.state ={
//       answer:"Yes"
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>Is state important to know?{this.state.answer}</h1>
//       </div>
//     )
//   }
// }

//Third prog

// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       name:"sridhar",
//       age:25
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age}years old</h3>
//       </div>
//     )
//   }
// }

//Fourth prog

// class App extends Component{
//   constructor(){
//     super()
//     this.state= {
//       toLoggedIn : ""
//     }
//   }
//   render(){
//     let wordDisplay
//       if(this.state.toLoggedIn){
//         wordDisplay = "in"
//       } else {
//           wordDisplay = "out"
//       }

//     return(
//       <div>
//           <h1> You are currently logged{wordDisplay}</h1>
//       </div>

//     )
//   }

// }

// 5th prog

// class App extends React.Component{
//    constructor(){
//      super()
//      this.state ={
//        todos : todoData
//      }
//    }
//    render(){
//      const todoitem = this.state.todos.map(item => <Todoitem key={item.id} item={item} />)
//        return(
//          <div className="todo-item">
//            {todoitem}
//          </div>
//       )
//    }
// }

// 6th prog

// https://reactjs.org/docs/events.html#suppored-events

// function handelChange(){
//   alert("i was clicked");
// }
// function App(){
//   return(
//     <div>
//       <img onMouseOver={() => alert("hovered!")}  
//         src="https://www.fillmurray.com/200/100" 
//       />
//         <br /> 
//         <br />
//       <button onClick={handelChange}>Click Me </button>
//     </div>
//   )
// }

//7th prog

// class App extends React.Component{
//    constructor(){
//     super()
//     this.state = {
//       count : 0
//     }
//       this.handleClick = this.handleClick.bind(this)
//    }
//    handleClick(){
//     this.setState(preveState => {
//       return{
//         count:preveState.count + 7
//       }
//     })
//    }
//    render(){
//       return(
//         <div>
//           <h3>{this.state.count}</h3>
//           <button onClick={this.handleClick}>Start Count </button>  
//         </div>    
//       )
//    }
// }

//8th prog


// class App extends React.Component{
//    constructor(){
//      super()
//      this.state = {
//        todos : todoData
//      }
//      this.handleChange = this.handleChange.bind(this)
//    }
//    handleChange(id){
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo => {
//         if(todo.id === id){
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return{
//         todo:updatedTodos
//       }
//     })
//    }

//    render(){
//      const todoitem = this.state.todos.map(item => <Todoitem key={item.id} item={item} 
//       handleChange = {this.handleChange} />)
//        return(
//          <div className="todo-item">
//            {todoitem}
//          </div>
//       )
//    }
// }

//9th prog

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b6921b
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
// Life Cycle Methodes class code 

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {}
//   }

//   static  getDerivedStateFromProps(props,state){
//     //return the new ,update state based upon the props
//     //https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
//     //https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops 
//   }
//   getSnapshortBeforeUpdate(){
//     //create a backup of the current way things are 
//     //https://reactjs.org/docs/react-component.html#getsnapshortbeforupdate
//   }
//   componentWillMount(){

//   }


//   componentDidMount(){
//     //Get the data i need to correctly  display  

//   }

//   componentWilReceivedProps(nextProps){
//     if(nextProps.whatever !== this.prpos.whatever){
//       // do something important here
//     } 
//   }
//   shouldComponentUpdate(nextProps,nextState){
//     //return true if want it to update
//     // return false if not
//   }
//   componentWillUpdate(){

//   }

//   compounentWillUnmount(){
    
//     // teardown or cleanup your code before your component disappearers
//     // (E.g remove event listener)
//   }
//   render(){
//     return(
//       <div>

//         Code goes here
//       </div>
//     )
//   }
// }


//10th prog
//Conditional Programing

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       isLoading : true
     
//     }
//   }
//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({
//         isLoading : false
//       })
//     },1200)
//   }
//   render(){
//     return(
//       <div>
//           {
//             this.state.isLoadding ? 
//             <h1>Loading ..</h1> :
//             <Conditional />
//           }
//       </div>
//     )
//   }
// }

//10th (a) prog
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {     
//       unreadMessages :["1","2"]
//     }
//   }  
//   render(){
//     return(
//       <div>
//           {
//             this.state.unreadMessages.length >0  &&
//             <h2>you have {this.state.unreadMessages.length} unread message </h2> 
//           }
//       </div>
//     )
//   }
// }


//11th conditional rendering

// class App extends Component{
// 	constructor(){
// 		super()
// 		this.state = {
// 			isLoadingOut : true
// 		}
// 		this.handleClick = this.handleClick.bind(this)
// 	}

// 	handleClick(){
// 		this.setState(prevState => {
// 			return{
// 				isLoadingOut : !prevState.isLoadingOut
// 			}
// 		}) 
// 	}
// 	render(){
// 		let buttonText = this.state.isLoadingOut ? "LOG IN" : "LOG OUT"
// 		let displayText = this.state.isLoadingOut ? "Logged Out" : "Logged In"
// 		return(
// 			<div>
// 				<button onClick={this.handleClick}>{buttonText}</button>
// 				<h2>{displayText}</h2>
// 			</div>
// 		)
// 	}
// }


// Fetching data from an API

//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

//https://swapi.co 

//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

//API URL : https://swapi.co/api/planets/1/



// class App extends Component{
// 	constructor(){
// 		super()
// 		this.state ={
// 			loading:false,
// 			character:{}
// 		}
// 	}

// 	componentDidMount(){
// 		this.setState({loading:true})
// 		fetch("https://swapi.co/api/films/7/")
// 		.then(response => response.json())
// 		// .then(data => console.log(data))
// 		.then(data => {
// 			this.setState({
// 				loading:false,
// 				character:data
// 			})
// 		})
// 	}

// 	render(){
// 		const text = this.state.loading ? "loading..." : this.state.character.title
// 		return(
// 			<div>
// 				<p>{text}</p>
// 			</div>
// 		)
// 	}

// }

//Form part 1

// class App extends Component{
// 	constructor(){
// 		super()
// 		this.state = {
// 			firstName: "",
// 			lastName: "",
// 			address: "",
// 			pincode:"",
// 			email: ""

// 		}
// 		this.handleChange = this.handleChange.bind(this)
// 	}
// 	handleChange(event){
// 		// const {name,value} = event.target  (dummy example 1)
// 		this.setState({
// 			[event.target.name] : event.target.value
// 			// name : value (dummy example 1)
// 		})
// 	}
// 	render(){
// 		return(
// 			<form>
// 				<input 
// 				   type="text" 
// 				   value={this.state.firstName} 
// 				   name="firstName" 
// 				   placeholder="Sridhar" 
// 				   onChange={this.handleChange} 
// 				 />
				
// 				<input 
// 				    type="text" 
// 				    value={this.state.lastName}
// 				    name="lastName" 
// 				    placeholder="R"  
// 				    onChange={this.handleChange} />	
				
// 				<input 
// 					type="text" 
// 					value={this.state.address}
// 					name="address" 
// 					placeholder="Address"  
// 					onChange={this.handleChange} 
// 				/>			
				
// 				<input 
// 					 type="number" 
// 					 value={this.state.pincode}
// 					 name="pincode" 
// 					 placeholder="pincode"  
// 					 onChange={this.handleChange} 
// 				 />

// 				<input 
// 					type="email" 
// 					value={this.state.email}
// 					name="email" 
// 					placeholder="email"  
// 					onChange={this.handleChange} 
// 				/>
				
// 				<h1>{this.state.firstName} </h1>
// 				<h1>{this.state.lastName}</h1>
// 				<h1>{this.state.address}</h1>
// 				<h1>{this.state.pincode}</h1>
// 				<h1>{this.state.email}</h1>
// 			</form>
// 		)
// 	}
//}

//Form 2 example

class App extends Component{
	constructor(){
		super()
   			this.state = {
			firstName:"",
			lastName:"",
			textarea:"",
			isFriendly:false,
			gender:"",
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event){
		const{name,value,type,checked} = event.target
		type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]:value})
	}
	render(){
		return(
			<form>	
				<input 
				   type="text"
				   value={this.state.firstName}
				   name="firstName"
				   placeholder="firstName"
				   onChange={this.handleChange}
				/>
				<br />
				<input 
				 type="text"
				 value={this.state.lastName}
				 name="lastName Needed"
				 placeholder="Last"
				 onChange={this.handleChange}
				/>
				<textarea 
					value={"some default value"}
					name="textarea"
					onChange={this.handleChange}
				/>
				<br />
				<label>
					<input 
					type="checkbox"
					name="isFriendly"
					checked={this.state.isFriendly}
					onChange={this.handleChange}
					/>Is Friendly
				</label>
				<br />
				<label>
					<input
					 type="radio"
					 name="gender"
					 value="male"
					 checked={this.state.gender === true}
					 onChange={this.handleChange}
					 />Male
				</label>
				<br />
				<label>

					<input 
						type="radio"
						name="gender"
						value="female"
						checked={this.state.gender === false}
						onChange={this.handleChange}
					/>Female
				</label>
				<br />
				<h5>{this.state.firstName} {this.state.lastName} </h5>
				<h5>{this.state.textarea}</h5>				
				<h5>{this.state.gender}</h5>
			</form>
		)
	}
}


export default App;
