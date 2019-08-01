import React from 'react';
import ReactDOM from 'react-dom';
// import AllUsers from './allUsers'
// import LoginBox from './loginbox';
// import SignUp from './singupbox';
import './App.css';

class App extends React.Component {
  

// constructor(props){
//   super(props);
//   this.state={isLoginOpen: true, isRegisterOpen: false};
//   }

//   showLoginBox(){
//     this.setState({isLoginOpen: true, isRegisterOpen: false});

//   }
//   showRegisterBox(){
//     this.setState({isRegisterOpen: true, isLoginOpen: false});
//   }
//   render(){
//     return(
      
      
      
//     <div className="root-container">
       
//           <div className="top-text" >
//             {/* <h1>OPEN KNOWLEDGE is place where you can be more trustful!</h1> */}
//             <input  placeholder="Search friend"  className="search-border" name="text" ></input>
        
//           </div>
         
//             <div  className="box-controller" >
//               <div  className="FormTitle" >
              
//               </div>
//               <div className="controller " onClick={this.showLoginBox.bind(this)}>
//                 Log in
                
//               </div>
//               <div className="controller" onClick={this.showRegisterBox.bind(this)} >
//                 Sign up
//               </div>

//             </div>

//             <div className="box-login">

//               {this.state.isLoginOpen &&   <LoginBox />}
              

//             </div>

//             <div className="box-signup">


//             {this.state.isRegisterOpen &&   <SignUp />}

//             </div>
            
            
//     </div>
     

//     )}
// constructor(props) {
//   super(props);
  state = { 
    text: "leading"
 };
// }

componentDidMount() {
  fetch("http://localhost:5000/api/")
      .then(data => data.json())
      .then(data2=>{
        console.log(data2)
        this.setState({
          data:data2._id,
        })
        

        });
      }

  render(){
    return(
      <div>
      
          {this.state.text}
           
      
      </div>
        
      
    )
  }
   
        
  

}




export default App
ReactDOM.render(<App />, document.getElementById('root'));