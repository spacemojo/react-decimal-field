react-decimal-field
=========

React component that represents a decimal input field. This takes as input ONLY digits
and zero or one point(.).

## Installation

    npm install react-decimal-field --save

## Usage

    let DecimalField = require('react-decimal-field');

    functionToSetDecimalValue: function(value) {
        console.log("This is what I want to do with the value " + value);
    }

    render : function () {

        return (
            <div>
                <DecimalField name="My Field" setValue={this.functionToSetDecimalValue} />
            </div>
        )

    }

## See it in action !

You can find a working example [here](http://standardstate.com/react-components/react-decimal-field).

## Testing

If you want to test the component in an already working context, there is an app already set up for that.
Go in the **node_modules/react-decimal-field** folder, you will find the **gulpfile.js** file
and an app folder containing the sources.
To get the app running, do the following :

    npm install // this installs the required packages for the component
    npm install -g gulp // to build the test app
    gulp // launches the default task
    npm install -g http-server // optional, if you want to use this server to view the app in a browser
    http-server ./dist/ -p 4000 // to launch the server

Point your browser to [http://127.0.0.1:4000](http://127.0.0.1:4000) to see the sample app that uses the component.
