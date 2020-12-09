import React, { Component } from 'react';
import axios, { post } from 'axios';
import styles from '../styles/Home.module.css'
import { teamOneName, teamTwoName } from '../settings.json';

export default class FileUpload extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    file: null,
    team: null
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.fileUpload(this.state.file)
      .then(resp => console.log(resp.data));
  }

  onChange = e => this.setState({ file: e.target.files[0] })
  onTeamChange = e => this.setState({ team: e.target.value });

  fileUpload = file => {
    const formData = new FormData();
    formData.append('file', file);
    return post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  render() {
    return (
      <div className={styles.card}>
        <form onSubmit={this.onFormSubmit}>
          <h3>Upload hier &rarr;</h3>
          <p>Welk team ben je?</p>
          <span className={styles.inputLabel}>{teamOneName}</span>
          <input type="radio" name="team" value={teamOneName} onChange={this.onTeamChange}/>
          <span className={styles.inputLabel}>{teamTwoName}</span>
          <input type="radio" name="team" value={teamTwoName} onChange={this.onTeamChange}/>
          <br />
          <br />
          {this.state.team === null ? <></>
          :
          <>
            <input type="file" name="file" onChange={this.onChange} />
            <button type="submit">Upload</button>
          </>
          }
        </form>
      </div>
    )
  }
}