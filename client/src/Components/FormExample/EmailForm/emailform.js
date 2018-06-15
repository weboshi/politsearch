import {ControlLabel, FormControl, HelpBlock, FormGroup } from 'react-bootstrap'
import React, { Component } from 'react';

export default class EmailForm extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel style={{fontWeight:'normal'}}>Email</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
           
          </FormGroup>
        </form>
      );
    }
  }
  
