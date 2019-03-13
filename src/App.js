import React,{Component} from 'react';
// import './App.css';
// import Joke from './Jock';
// import jokesData from './jokesData';
// import Product from './Product';
// import vschoolProducts from './vschoolProducts';
// import Todoitem from './Todoitem';
// import todoData from './todoData'  
import Conditional from './Conditional'


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

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoading : true
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading : false
      })
    },1500)
  }
  render(){
    return(
      <div>
         <Conditional isLoading={this.state.isLoading} />
      </div>
    )
  }
}


export default App;
