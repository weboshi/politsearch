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

    getDonors(row) {    
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