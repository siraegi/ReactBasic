import React from "react";
import Counter from './Counter';
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

import styles from '../pages/scoreboard/Scoreboard.module.css';

class Player extends React.PureComponent {
  /*componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate', nextProps);
    return nextProps.score !== this.props.score;
  }*/
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
  }

  render() {
    console.log(this.props.name, ' redered');
    const {removePlayer, id, name, score} = this.props;
    return (
      <div className={styles.player}>
        <span className={styles["player-name"]}>
          <button className={styles["remove-player"]} onClick={() => removePlayer(id)}>x</button>
          {/*<span className={styles["player-name"]}>{name}</span>*/}
          {this.props.children}
          {name}
        </span>
        <Counter score={score} id={id} />
      </div>
    );
    /*return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player"
                  onClick={() => removePlayer(id)}>x</button>
          {this.props.children}
          {name}
        </span>
        <Counter score={score} id={id} changeScore={changeScore}/>
      </div>
    );
     */
  }

}
let mapDispatchToProps = (dispatch) => {
  return {
    removePlayer: (id) => dispatch(removePlayer(id))
  }
}

export default connect(null, mapDispatchToProps)(Player);
//export default Player;