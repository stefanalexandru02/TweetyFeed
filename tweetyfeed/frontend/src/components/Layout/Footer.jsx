import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer className='text-center'>
                © Stefan Alexandru Virna
                <br />
                <Link to='about'>About</Link>
            </footer>
        );
    }
}