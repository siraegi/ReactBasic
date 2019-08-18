import React from 'react';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

class App extends React.Component{
  render(){
    console.log(this.props);
    return (
      <div className = "App">
        <p>{this.props.title}</p>
        <button onClick={()=>this.props.updateUser('KIM')}>change name</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  users: state.users
})

const mapActionToProps = (dispatch) => ({
  updateUser: (name) => dispatch(updateUser(name))
})


export default connect(mapStateToProps, {updateUser})(App);

/*
import React from 'react';
import logo from './logo.svg';
import './Scoreboard.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
