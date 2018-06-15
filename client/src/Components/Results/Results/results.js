import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import Paper from 'material-ui/Paper';
import './results.scss'
import { Button, ButtonToolbar, Modal, Popover, Tooltip, OverlayTrigger, Glyphicon, FormGroup, Checkbox } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Footer } from '../../Footer'
import publicaKey from '../../../publicakey';
import { Convert } from 'xml-js';
import { parser } from 'xml2json-light';
import { parseString } from 'xml2js';
import {Navbar} from '../../Navbar'





// const products = this.state.info

const h3Style = { paddingBottom: '20px', fontFamily: 'Patua One, cursive' };

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
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.state = {
        checkedFed: true,
        checkedState: true,
        checkedLocal: true,
        officialState: [],
        officialFed: [],
        officialLocal: [],
        zipCode: "",
        info: [],
        showCheckboxes: false,
        show: false,
        totalReceipts16: 'N/A',
        totalIndividual16: 'N/A',
        totalPac16: 'N/A',
        totalContributions16: 'N/A',
        totalReceipts18: 'N/A',
        totalIndividual18: 'N/A',
        totalPac18: 'N/A',
        totalContributions18: 'N/A',

      }
      console.log(this.props.location.state.zipCode)
    }
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true,
        totalReceipts16: 'N/A',
        totalIndividual16: 'N/A',
        totalPac16: 'N/A',
        totalContributions16: 'N/A',
        totalReceipts18: 'N/A',
        totalIndividual18: 'N/A',
        totalPac18: 'N/A',
        totalContributions18: 'N/A', });
    }
  
    handleChange1() {
      this.setState({
        checkedFed: !this.state.checkedFed
      })
    }
    handleChange2() {
      this.setState({
        checkedState: !this.state.checkedState
      })
    }
    handleChange3() {
      this.setState({
        checkedLocal: !this.state.checkedLocal
      })
    }
  
    twitterFormat(cell, row) {
      var twitterLink = ('https://twitter.com/' + String(cell))
      return <div>
        <a href={twitterLink}><i class="fa fa-twitter-square" style={{fontSize:"24px", margin:'0px', padding:'0px'}}></i></a>
        </div>
    }

    buttonFunction(cell, row) {     
      return <div>
               <Button bsStyle="success" 
                       onClick={() => {this.getDonors(row);{this.handleShow()}}} 
                       className="bbtn btn-primary btn-sm">
                         Check
               </Button>
             </div> 
    }
    
    getDonors = (row) => { {
      var found = false;
      var fullName = row.name.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];
      fetch('https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=' + lastName, {
        method: 'GET',
        headers: {
          'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
        }
      }).then(response => { response.json(); console.log(response)
      
      
          
          fetch('https://api.propublica.org/campaign-finance/v1/2018/candidates/search.json?query=' + lastName, {
                method: 'GET',
                headers: {
                  'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
          }
              }).then(
                      response => response.json()
                      .then(response => { console.log(response)
                      

                      
                      for (i=0; i < response.results.length; i++) {
                          if (response.results[i].candidate.name.indexOf(firstName.toString().toUpperCase()) !== -1)
                          { 
                          console.log(found)
                            if (found = true) {
                              return;
                            }
                              fecId = response.results[i].candidate.id
                              var i;
                              var fecId;
                              var homeState;
                              console.log(fecId);
                              found = true;
                             

                              fetch('https://api.propublica.org/campaign-finance/v1/2018/candidates/' + fecId + '.json', {
                          method: 'GET',
                          mode: 'CORS',
                          headers: {
                              'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
                          }
                      }).then(res => res.json()).then(res => {homeState = res.results[0].mailing_state;
                          var totalReceipts18 = ('$' + res.results[0].total_receipts.toString())
                          var totalIndividual18 = ('$' + res.results[0].total_from_individuals.toString())
                          var totalPac18 = ('$' + res.results[0].total_from_pacs.toString())
                          var totalContributions18 = ('$' + res.results[0].total_contributions.toString())
                          console.log(totalReceipts18)
                          this.setState({
                            totalReceipts18: totalReceipts18,
                            totalIndividual18: res.results[0].total_from_individuals,
                            totalPac18: res.results[0].total_from_pacs,
                            totalContributions18: totalContributions18
    
                            })
                           
                              })
                             
                              }

                            else {
                              fetch('https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=' + lastName, {
                                method: 'GET',
                    
                                headers: {
                                  'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
                          }
                              }).then(
                                      response => response.json()
                                      .then(response => { console.log(response)
                    
                                      for (i=0; i < response.results.length; i++) {
                                          if (response.results[i].candidate.name.indexOf(firstName.toString().toUpperCase()) !== -1)
                                          { 
                                          
                                              fecId = response.results[i].candidate.id
                                              var i;
                                              var fecId;
                                              var homeState;
                                              console.log(firstName)
                                              console.log(fecId)
                                              fetch('https://api.propublica.org/campaign-finance/v1/2016/candidates/' + fecId + '.json', {
                                                method: 'GET',
                                                
                                                headers: {
                                                    'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
                                                }
                                            }).then(res => res.json()).then(res => {homeState = res.results[0].mailing_state;
                                              var totalReceipts16 = ('$' + res.results[0].total_receipts.toString())
                                              var totalIndividual16 = ('$' + res.results[0].total_from_individuals.toString())
                                              var totalPac16 = ('$' + res.results[0].total_from_pacs.toString())
                                              var totalContributions16 = ('$' + res.results[0].total_contributions.toString())
                                                
                                                console.log(totalReceipts16)
                                                this.setState({
                                                  totalReceipts16: totalReceipts16,
                                                  totalIndividual16: totalIndividual16,
                                                  totalPac16: totalPac16,
                                                  totalContributions16: totalContributions16
                          
                                                  })
                                                  
                                                    })
                                              }
                                              }
                                    
                                      
                                          }
                                        
                                          ))
                            break }

                              }
                  
                      
                          
                          
                           
                        
                        
                          }
                          ))
          
                      
   
       } )
  }}

    getDonors2 = (row) => { {
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
        .then(response => { console.log(response.length)
          if (response.length == undefined) {
            console.log("fetch")
            fetch('https://api.propublica.org/campaign-finance/v1/2018/candidates/search.json?query=' + lastName, {
              method: 'GET',
              mode: 'CORS',
              headers: {
                'X-API-Key': 'Q82EAnyHuygomXxK2mNDfcHkvOQ17EmsBPvOc1eq'
        }
          }).then(
            response => response.json()
            .then(response => { console.log(response)

              for (i=0; i < response.results.length; i++) {
                if (response.results[i].candidate.name.indexOf(firstName.toString().toUpperCase()) !== -1)
                { 
                
               fecId = response.results[i].candidate.id
              var i;
              var fecId;
              var homeState;
                console.log(fecId)
                
                }
              }
              
        }
        
        ))
      
          }
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
           var totalReceipts = res.results[0].total_receipts
           var totalIndividual = res.results[0].total_from_individuals
           var totalPac = res.results[0].total_from_pacs
           var totalContributions = res.results[0].total_contributions
           console.log(homeState)
           var convert = require('xml-js');
           var parser = require('xml2json-light');
           var parseString = require('xml2js').parseString;
           var crpData;
           var result1;
           var data;
           var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
           targetUrl = 'http://www.opensecrets.org/api/?method=getLegislators&id=' + homeState + '&apikey=' + '797c36dad81726454e4652d7b7702b53'
           fetch(proxyUrl + targetUrl, 
            {mode: 'CORS'}).then((response) => {
                
                response.text().then((data) => {
                  var parser = require('xml2json-light');
                  var json = parser.xml2json(data)
                  
                  console.log(json)
                  
                  console.log(firstName)
                  
                  for (i=0; i < json.response.legislator.length; i++) {
                    if (json.response.legislator[i].firstlast.indexOf(firstName.toString()) != -1)
                    { 
                    
                  var cId = json.response.legislator[i].cid;
                  console.log(cId);
                    }
                    else {
                      continue
                    }
                  }
                  var proxyUrl2 = 'https://cors-anywhere.herokuapp.com/'
                  var targetUrl2 = 'https://www.opensecrets.org/api/?method=candContrib&cid=' + cId + '&cycle=2018&apikey=' + '797c36dad81726454e4652d7b7702b53'
                  fetch(proxyUrl2 + targetUrl2, 
                    {mode: 'CORS'})
                    .then((response2) => {
                      response2.text().then((data2) => {
                        var parser = require('xml2json-light');
                        var json = parser.xml2json(data2)
                        console.log(data2)
                      })
                    })


              })
          })
          });
       

      })
  
      
    }
    }
  

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        If N/A is returned, then the FEC database does not have that information or representative was not running for office that year.
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">If N/A is returned, then the FEC database does not have that information or representative was not running for office that year.</Tooltip>;
    return (
      
      <MuiThemeProvider>
     <div>
       <Navbar/>
      <div className="body">
        <div className="labels">
        <br/>
        <div className='results-header'>
        <h4 className='results-h1'> Representatives for </h4>
        <div className='results-header-address'>
        <h2>{this.props.location.state.zipCode}</h2>
        </div>
        </div>
        <hr width='80%' />
        <div className='checkbox'>
        <FormGroup>
        <Checkbox inline style={{color:'black'}} onChange={this.handleChange1} checked={this.state.checkedFed}>Federal</Checkbox> 
        <Checkbox inline style={{color:'black'}} onChange={this.handleChange2} checked={this.state.checkedState}>State</Checkbox>{' '}
        <Checkbox inline style={{color:'black'}} onChange={this.handleChange3} checked={this.state.checkedLocal}>Local</Checkbox>
        </FormGroup>
        </div>
        
          {this.state.checkedFed && <div className='table-div'>
          <h3 align='center' style={h3Style}> Federal </h3>
          
          <BootstrapTable bordered={false} striped={true} data={ this.props.location.state.officialFed }>
          <TableHeaderColumn dataField='name' isKey={true} dataAlign="center" >Name</TableHeaderColumn>
          <TableHeaderColumn dataField='office' dataAlign="center" >Office</TableHeaderColumn>
          <TableHeaderColumn dataField='party' dataAlign="center" >Party</TableHeaderColumn>
          <TableHeaderColumn dataField='Twitter' dataAlign="center" dataFormat={this.twitterFormat.bind(this)} >Twitter</TableHeaderColumn>
          <TableHeaderColumn dataField='donors' dataAlign="center" dataFormat={ this.buttonFunction.bind(this) }>Donors</TableHeaderColumn>
          
        </BootstrapTable>
          
         
    </div> }
          {this.state.checkedState && <div className='table-div'> 
          <h3 align='center' style={h3Style}> State </h3>
          <BootstrapTable bordered={false} striped={true} data={ this.props.location.state.officialState }>
          <TableHeaderColumn dataField='name' isKey={true} dataAlign="center" >Name</TableHeaderColumn>
          <TableHeaderColumn dataField='office' dataAlign="center" >Office</TableHeaderColumn>
          <TableHeaderColumn dataField='party' dataAlign="center" >Party</TableHeaderColumn>
          <TableHeaderColumn dataField='Twitter' dataAlign="center" dataFormat={this.twitterFormat.bind(this)}>Twitter</TableHeaderColumn>
          <TableHeaderColumn dataField='donors' dataAlign="center" dataFormat={ this.buttonFunction.bind(this) }>Donors</TableHeaderColumn>
          
        </BootstrapTable>
          
         
    </div> }
          
          {this.state.checkedLocal && <div className='table-div'> 
          <h3 align="center" style={h3Style}> Local </h3>
          <BootstrapTable bordered={false} striped={true} data={ this.props.location.state.officialLocal }>
          <TableHeaderColumn dataField='name' isKey={true} dataAlign="center" >Name</TableHeaderColumn>
          <TableHeaderColumn dataField='office' dataAlign="center" >Office</TableHeaderColumn>
          <TableHeaderColumn dataField='party' dataAlign="center" >Party</TableHeaderColumn>
          <TableHeaderColumn dataField='Twitter' dataAlign="center" dataFormat={this.twitterFormat.bind(this)}>Twitter</TableHeaderColumn>
          <TableHeaderColumn dataField='donors' dataAlign="center" dataFormat={ this.buttonFunction.bind(this) }>Donors</TableHeaderColumn>
          
        </BootstrapTable>
          
         
          </div>}
          <Footer/>
        </div>
        <Modal style={{color:'black'}} show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Financial Contributions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Total Contributions 2016 Campaign Cycle <OverlayTrigger overlay={tooltip}><Glyphicon glyph="question-sign" /></OverlayTrigger>{''}</h4>
            <p>  
                {this.state.totalContributions16}
            </p>
            <h4>Total Individual Contributions</h4>
            <p>
              {this.state.totalIndividual16}
            </p>
            <h4>Total PAC Contributions</h4>
            <p>
              {this.state.totalPac16}
            </p>
            <hr />
            <h4>Total Contributions 2018 Campaign Cycle <OverlayTrigger overlay={tooltip}><Glyphicon glyph="question-sign" /></OverlayTrigger>{''}</h4>
            <p>
                {this.state.totalContributions18}
            </p>
            <h4>Total Individual Contributions</h4>
            <p>
              {this.state.totalIndividual18}
            </p>
            <h4>Total PAC Contributions</h4>
            <p>
              {this.state.totalPac18}
            </p>

      
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      </div>
        
  </MuiThemeProvider>
    )}

  }