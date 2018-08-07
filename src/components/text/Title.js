import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <h4 className="mb-4"> {this.props.children} </h4>
        );
    }
}

export default Title;
