'use strict'

var React = require('react');
var UUID = require('uuid');

var DecimalField = React.createClass({displayName: "DecimalField",

  id: "",
  currentValue: "",

  onChange: function(event) {

    var inputValue = event.nativeEvent.target.value;

    if(inputValue.length > 0) {

      var isDecimal = (inputValue.match( /^(\d+\.?\d*|\.\d+)$/ ) != null);
      if(isDecimal) {
        this.currentValue = inputValue;
      } else {
        document.getElementById(this.id).value = inputValue.substring(0, inputValue.length - 1);
      }

    } else {
      this.currentValue = "";
    }

    this.props.setValue(this.currentValue);

  },

  render: function() {
    this.id = UUID.v4();
    return (
      React.createElement("div", null, 
        React.createElement("label", {htmlFor: this.id}, this.props.name), 
        React.createElement("input", {style: {color: "#000000"}, type: "text", className: "u-full-width", placeholder: this.props.name, id: this.id, defaultValue: "", onChange: this.onChange})
      )
    )
  }

});

module.exports = DecimalField;

