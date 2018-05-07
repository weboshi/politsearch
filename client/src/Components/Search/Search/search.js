import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import Paper from 'material-ui/Paper';



export default class searchState extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        zipCode: "",
        info: [],
      }
    }
  
  
    onChange = (e) => {
      this.setState({
          zipCode: e.target.value
      });
      console.log(e.target.value)
  }
  


  
  getData = (e) => {  console.log(this.state.zipCode)
    axios.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + this.state.zipCode + '&key=AIzaSyCFuEuxXr4uMgyEjUY-zFOQV54TWcGxygQ')
  .then(res => {
    const info = res.data;
    this.setState({ info: res.data.officials })
  })
  }
  
  onSubmit = (e) => {
   
  console.log(this.state.zipCode)
          const {
          zipCode
          } = this.state.zipCode;
          this.getData()
    // }
  }
  
  render() {
    return (
      <MuiThemeProvider>
      <div className="main">
      <div>
      <TextField
      onChange={this.onChange}
      onRequestSearch={this.onSubmit}
      value={this.state.zipCode}
     
      name="zipCode"
      style={{
        margin: '0 auto',
        maxWidth: 500
      }}
    />
    </div>
    <div>
                        <RaisedButton onClick={this.onSubmit} label="Submit!" />
                    </div>
   
    <div>
    <h1>Representatives</h1>
    <ul>
      {this.state.info.map(officials => <li key={officials.name}>{officials.name}{officials.party}</li>
      )}
    </ul>
  </div>
  </div>
  </MuiThemeProvider>
    )}

  }