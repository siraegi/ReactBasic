import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import classNames from 'classnames';
import styles from '../pages/scoreboard/Scoreboard.module.css';
const Counter = ({id, score, changeScore}) => {
    return (
      <div className={styles.counter}>
          <button className={classNames(styles["counter-action"], styles.decrement)} onClick={() => changeScore(id, -1)}> - </button>
          <span className={styles["counter-score"]}>{score}</span>
          <button className={classNames(styles["counter-action"], styles.increment)} onClick={() => changeScore(id, 1)}> + </button>
      </div>
    )
    /*return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={() => changeScore(id, 1)}> + </button>
      </div>
    )*/

}
let mapDispatchToProps = (dispatch) => {
    return {
        changeScore: (id, delta) => dispatch(changeScore(id, delta))
    }
}

export default connect(null, mapDispatchToProps)(Counter);
Counter.propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}
//export default Counter;