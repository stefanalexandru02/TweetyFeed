import React, { Component } from 'react';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}