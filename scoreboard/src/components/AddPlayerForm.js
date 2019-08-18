import React,{Component} from 'react';
import {connect} from "react-redux";
import {addPlayer} from "../redux/actions";
import styles from '../pages/scoreboard/Scoreboard.module.css';
class AddPlayerForm extends Component {
  textInput = React.createRef();

  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    /*const form = document.getElementById("form");
    const player = document.getElementById("player");

    console.log(form.checkValidity());
    console.log(player.validity.valid);*/

    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
    // this.setState({
    //   value: ''
    // });
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit} noValidate>
        <input className={styles.input} type="text" ref={this.textInput} placeholder="enter a player's name" />
        <input className={styles.input} type="submit" value="Add Player" />
      </form>
    )
  }
  /*render() {
    return (
      <form id="form" className="form" onSubmit={this.handleSubmit} noValidate >
        {/!*<input id="player" className="input" type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleValueChange} required />*!/}
        {/!*<input className="input" type="submit" value="Add Player" />*!/}
        <input type="text" ref={this.textInput} placeholder="enter a player's name" />
        <input type="submit" value="Add Player" />
      </form>
    )
  }*/
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: (name) => dispatch(addPlayer(name))
  }
}

export default connect(null, mapDispatchToProps)(AddPlayerForm);
//export default AddPlayerForm;