import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter, Redirect } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import Paper from 'material-ui/Paper';
import './search.scss'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Results from '../../Results';
// import Table from '../../Table';
import googleApi from '../../../googleapi';



export default class searchState extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        zipCode: "",
        info: [],
        offices: [],
        showCheckboxes: true,

      }
    }
  
    onChange = (e) => {
      this.setState({
          zipCode: e.target.value
      });
      console.log(e.target.value)
  }
  
    getData = (e) => {  console.log(this.state.zipCode)
      axios.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + this.state.zipCode + '&key=' + googleApi)
    .then(res => {
      const info = res.data;
      var offices = res.data.offices
      var officials = res.data.officials;
      var i;
      var n;
      
      console.log(Array.isArray(officials))
        console.log(offices)
        for (i=0; i < offices.length; i++){ 
          for (n=0; n < offices[i].officialIndices.length; n++) {
            
             officials[offices[i].officialIndices[n]].office = offices[i].name } 
        }
        console.log(officials)
        for (i=0; i < officials.length; i++){ console.log(officials[6].channels)
          if (officials[i].channels != undefined){
          for (n=0; n < officials[i].channels.length; n++){
            
            officials[i][officials[i].channels[n].type] = officials[i].channels[n].id
          }
        }
        
        }
       console.log(officials)
       this.setState({ info: officials })
    }).then(
    console.log(this.officials))
  }
  



  onSubmit = (e) => {
    e.preventDefault();
   
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
        maxWidth: 500,
        background: 'white',
      }}
    />
    </div>
    <br/>
    <div>
      <RaisedButton onClick={this.onSubmit} label="Submit!" />
    </div>
   
   {this.state.info.length > 0 &&
   <Redirect to={{
    pathname: '/results',
    state: { info: this.state.info, offices: this.state.offices, zipCode: this.state.zipCode } }}/>
   }
   
    {/* <div>
    
      <Table>
      <h1> Representatives </h1> 
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Party</TableHeaderColumn>
      </TableRow>
      <TableBody displayRowCheckbox={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <div className='table-div'> 
      {this.state.info.map(officials => 
      
       <TableRow >
        <TableRowColumn key={officials.name}>{officials.name}</TableRowColumn>
        <TableRowColumn>{officials.party}</TableRowColumn> 
        </TableRow>
      )}
      </div>
      </TableHeader>
      </TableBody>
      </Table>
    </div> */}
  }
  </div>
  
  </MuiThemeProvider>
    )}

  }
