import React from 'react';
import Stats from './Stats'
import Stopwatch from './StopWatch'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";
import styles from '../pages/scoreboard/Scoreboard.module.css';
const Header = ({players, title, changeTitle}) => {
  return (
    <header className={styles.header}>
      <Stats players={players} />
      <h1 className={styles.h1} onClick={changeTitle}>{ title }</h1>
      <Stopwatch />
    </header>
  )
  /*return (
    <header>
      <Stats players={players} />
      <h1 onClick={changeTitle}>{ title }</h1>
      <Stopwatch />
    </header>
  )*/
}

let mapStateToProps = (state) => {
  return {
    title: state.playerReducer.title
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: () => dispatch(updateTitle('dispatch test'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}
Header.defaultProps = {
  title: 'Scoreboard'
}
//export default Header;