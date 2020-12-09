import React, { Component } from 'react';
import styles from '../styles/Home.module.css'
import { teamTwoName, teamOneName } from '../settings.json';

export default class Leaderboard extends Component {
  state = {
    team1: 0,
    team2: 0
  }
  componentDidMount() {
    // fetch standings;
  }

  render() {
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>{this.state.team1} : {this.state.team2}</h1>
        <h3 className="center">{teamOneName} : {teamTwoName}</h3>
      </div>
    )
  }
}