import React,{Component} from 'react';
import './App.css';
import Joke from './Jock';
import jokesData from './jokesData';
import Product from './Product';
import vschoolProducts from './vschoolProducts';
import Todoitem from './Todoitem';
import todoData from './todoData'

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


class App extends Component{
  constructor(){
    super()
    this.state= {
      toLoggedIn : ""
    }
  }
  render(){
    let wordDisplay
      if(this.state.toLoggedIn){
        wordDisplay = "in"
      } else {
          wordDisplay = "out"
      }

    return(
      <div>
          <h1> You are currently logged{wordDisplay}</h1>
      </div>

    )
  }

}


export default App;
