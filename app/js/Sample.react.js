'use strict'

var React = require('react');
var DecimalField = require('./DecimalField.react');

var Sample = React.createClass({

  getInitialState: function() {
    this.currentValue = "";
    return null;
  },

  mySetValue: function(value) {
    this.currentValue = value;
    this.setState({render: true});
  },

  render: function() {

    return (
      <div>
        <h3>This is a sample app to test the react-decimal-field component</h3>
        <p>In the 'Sample.react.js' component, the DecimalField is used as such : </p>
        <pre>
          &lt;DecimalField name="Decimal field in sample app" setValue={'\u007bthis.mySetValue\u007d'} /&gt;
        </pre>
        <p>Resulting in : </p>
        <DecimalField name="Decimal field in sample app" setValue={this.mySetValue} value="12.45" />
        <p>This is the value in the DecimalField : {this.currentValue}</p>
        <h5>OPTIONAL</h5>
        <p>You can always set the "value" property to initialize the field, like so : </p>
        <pre>
          &lt;DecimalField name="Decimal field in sample app" setValue={'\u007bthis.mySetValue\u007d'} value="123.45" /&gt;
        </pre>
      </div>
    )

  }

});

module.exports = Sample;
