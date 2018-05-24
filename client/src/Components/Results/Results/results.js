import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import Paper from 'material-ui/Paper';
import './results.scss'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Footer } from '../../Footer'
import publicaKey from '../../../publicakey';
import { Convert } from 'xml-js';
import { parser } from 'xml2json-light';





// const products = this.state.info



class ActiveFormatter extends React.Component {
  getDonations = () => { console.log()
   
    // var name
    // axios.get('https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=' + name)
  };
  render() {
    return (
      <Button bsStyle="success" onClick={activeFormatter}>Check</Button>
      // <input type='button' value='Backers' onClick={this.getDonations}/>
    );
  }
}

function activeFormatter(cell, row) {
  return (
    
    <ActiveFormatter onClick={() => {this._getDonors(row)}}/> 
  );
}



function onSelectRow(row, isSelected, e) {
  if (isSelected) {
    alert(`You just selected '${row['name']}'`)
  }
}

const selectRowProp = {
  mode: 'none',
  clickToSelect: true,
  unselectable: [2],
  selected: [1],
  onSelect: onSelectRow,
}

var config = {
  headers: {'X-API-Key': publicaKey },
  mode: 'CORS'
}

export default class resultPage extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        zipCode: "",
        info: [],
        showCheckboxes: false,
      }
      console.log(this.props.location.state.zipCode)
    }

    getDonors2(row) {    
      console.log(row.name);
    console.log(axios.get('https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=' + row.name, {mode: 'cors', 'Content-Type': 'application/json', headers: {'X-API-Key': publicaKey} }))
    .then(function(res){})
    }

    buttonFunction(cell, row) {     
      return <div>
               <Button bsStyle="success" 
                       onClick={() => {this.getDonors(row)}} 
                       className="bbtn btn-primary btn-sm">
                         Check
               </Button>
             </div> 
    }
    
    

    getDonors = (row) => { {
      var fullName = row.name.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];
      fetch('https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=' + lastName, {
        method: 'GET',
        mode: 'CORS',
        headers: {
          'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
        }
      }).then(response => response.json()) 
        .then(response => {
        console.log(firstName.toString());
        console.log(response.results)
        console.log(response.results[0].candidate.name.indexOf(firstName.toString()))
        var i;
        var fecId;
        var homeState;
       
        for (i=0; i < response.results.length; i++) {
          if (response.results[i].candidate.name.indexOf(firstName.toString().toUpperCase()) !== -1)
          { 
          
         fecId = response.results[i].candidate.id
         
          console.log(fecId)
          }
        }

        fetch('https://api.propublica.org/campaign-finance/v1/2018/candidates/' + fecId + '.json', {
          method: 'GET',
          mode: 'CORS',
          headers: {
            'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
          }
        }).then(res => res.json())
        .then(res => {homeState = res.results[0].mailing_state;
           
           console.log(homeState)
           var convert = require('xml-js');
           var crpData;
           var data;
           var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
           targetUrl = 'http://www.opensecrets.org/api/?method=getLegislators&id=' + homeState + '&apikey=' + '797c36dad81726454e4652d7b7702b53'
           fetch(proxyUrl + targetUrl, {mode: 'CORS'}).then(response => console.log(response))
          }
          )
       

      })
  
      
    }
    }
  

  render() {
    return (
      
      <MuiThemeProvider>
     
      <div className="body">
        <div className="labels">
        <br/>
        <div className='results-header'>
        <h3 className='results-h1'> Representatives for </h3>
        <div className='results-header-address'>
        <h3>{this.props.location.state.zipCode}</h3>
        </div>
        </div>
          <div className='table-div'> 
          <BootstrapTable bordered={false} striped={true} data={ this.props.location.state.info }>
          <TableHeaderColumn dataField='name' isKey={true} dataAlign="center" >Name</TableHeaderColumn>
          <TableHeaderColumn dataField='office' dataAlign="center" >Office</TableHeaderColumn>
          <TableHeaderColumn dataField='party' dataAlign="center" >Party</TableHeaderColumn>
          <TableHeaderColumn dataField='Twitter' dataAlign="center" >Twitter</TableHeaderColumn>
          <TableHeaderColumn dataField='donors' dataAlign="center" dataFormat={ this.buttonFunction.bind(this) }>Donors</TableHeaderColumn>
          
        </BootstrapTable>
          
         
          {/* <BootstrapTable data={this.props.location.state.officials} keyField='id'>
          {this.props.location.state.officials.map(column => 
              <TableHeaderColumn dataField={this.location.props.officials.name}>{column}</TableHeaderColumn>
          )}
      </BootstrapTable> */}
         
          </div>
          <Footer/>
        </div>
        
      </div>
        
  </MuiThemeProvider>
    )}

  }