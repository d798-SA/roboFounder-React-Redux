import React from "react";

class ErrorBoundry extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }


    render(){
        if(this.state.hasError){
            return <h1>opps seems you Unlucky person But don't worry! </h1>
        };

        return this.props.children;

    
    }
}


export default ErrorBoundry;