import React, { Component } from 'react';
import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <>
                <Navbar />
                <br />
                <div className="container mainPage">
                    {this.props.children}
                </div>
                <br />
                <Footer />
            </>
        );
    }
}