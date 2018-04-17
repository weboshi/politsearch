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
        stateLookup: "",
      }
    }
  
  
    onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      });
  }
  

  
  getData = (e) => {  
    axios.get('http://www.opensecrets.org/api/?method=getLegislators&id=' + this.state.stateLookup + '&apikey=797c36dad81726454e4652d7b7702b53', {headers: {"Access-Control-Allow-Origin": "*"},})
  .then(function(response){
    console.log(response.firstlast); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  }
  
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.stateLookup) {
        alert("Fill out a state please");
    } else {
          const {
          stateLookup
          } = this.state;
          this.getData()
    }
  }
  
  render() {
    return (
    <MuiThemeProvider>
      {/* <div>
    
 
      {<h1 style={{float: 'left'}}>Welcome!</h1>}
      {<h1 style={{float: 'left'}}>Type in your state below to get information about your local representatives.</h1>}
      </div> */}
      <div>
      
      <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 500
      }}
      value={this.state.Lookup}
      name="stateLookup"
    />
    </div>
    </MuiThemeProvider>
    )
  }
  }

  // export default withRouter(searchState);