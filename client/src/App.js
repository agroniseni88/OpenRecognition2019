import React from 'react';
import ReactDOM from 'react-dom';
import LoginBox from './loginbox';
import SignUp from './singupbox';


import './App.css';

class App extends React.Component {

constructor(props){
  super(props);
  this.state={isLoginOpen: true, isRegisterOpen: false};
  }

  showLoginBox(){
    this.setState({isLoginOpen: true, isRegisterOpen: false});

  }
  showRegisterBox(){
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }
  render(){
    return(
      
      
    <div className="root-container">
            <div  className="box-controller" >
              <div  className="FormTitle" >
              
              </div>
              <div className="controller " onClick={this.showLoginBox.bind(this)}>
                Log in
                
              </div>
              <div className="controller" onClick={this.showRegisterBox.bind(this)} >
                Sign up
              </div>

            </div>

            <div className="box-login">

              {this.state.isLoginOpen &&   <LoginBox />}
              

            </div>

            <div className="box-signup">


            {this.state.isRegisterOpen &&   <SignUp />}

            </div>
            
            
    </div>
     

    )}
  };

           
          
  
      


export default App
ReactDOM.render(<App />, document.getElementById('root'));