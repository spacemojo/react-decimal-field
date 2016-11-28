'use strict'

let React = require('react');
let UUID = require('uuid');

let DecimalField = React.createClass({

  getInitialState: function() {
    this.id = UUID.v4();
    this.currentValue = "";
    return null;
  },

  componentDidMount: function() {
    this.currentValue = (this.props.value == undefined) ? "" : this.props.value;
    document.getElementById(this.id).value = this.currentValue;
  },

  componentWillReceiveProps: function(newProps) {
    this.currentValue = (newProps.value == undefined) ? "" : newProps.value;
    document.getElementById(this.id).value = this.currentValue;
  },

  processValue: function(value) {
    return (this.isDecimal(value)) ? value : 0.00;
  },

  isDecimal: function(value) {
    return (value.match( /^(\d+\.?\d*|\.\d+)$/ ) != null);
  },

  onChange: function(event) {

    let that = this;
    this.currentValue = event.nativeEvent.target.value.split("")
      .reduce(function(str, char) {
        let tmp = str + char;
        return  (that.isDecimal(tmp)) ? tmp : str;
      }, "");

    document.getElementById(this.id).value = this.currentValue;
    this.props.setValue(this.currentValue);

  },

  render: function() {
    return (
      <div>
        <label htmlFor={this.id}>{this.props.name}</label>
        <input style={{color: "#000000"}} type="text" className="u-full-width" placeholder={this.props.name} id={this.id} defaultValue={this.currentValue} onChange={this.onChange} />
      </div>
    )
  }

});

module.exports = DecimalField;
