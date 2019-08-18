import React from 'react';
import {CustomPlayer} from "./CustomPlayer";
import styles from '../pages/scoreboard/Scoreboard.module.css';
class PlayerList extends React.Component {
  getHighScore() {
    const highScore = this.props.players.reduce((maxScore, player) => maxScore > player.score ? maxScore : player.score, 0);
    return highScore > 0 ? highScore : null;
  }

  render() {
    let titleClass = '';
    if (this.props.playerState.indexOf('All') >= 0) {
      titleClass = 'all-title';
    } else if (this.props.playerState.indexOf('Good') >= 0) {
      titleClass = 'good-title';
    } else if (this.props.playerState.indexOf('Bad') >= 0) {
      titleClass = 'bad-title';
    }

    return (
      <>
        <p className={styles[titleClass]}>{this.props.playerState}</p>

        {/*Players List*/}
        {
          this.props.players.map((item, index) =>
            <CustomPlayer name={item.name}
                          score={item.score}
                          key={item.id.toString()}
                          index={index}
                          isHighScore={item.score === this.getHighScore()}
                          id={item.id} />)
        }
      </>
    )
  }
}

export default PlayerList;