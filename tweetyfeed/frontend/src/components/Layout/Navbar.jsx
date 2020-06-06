import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    static displayName = Navbar.name;

    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-md bg-dark fixed-top">
                <div className="container">
                    <Link to='/' className="navbar-brand" href="#">TweetyFeed</Link>

                    {/* 
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> 
                    */}

                    {/* 
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div> 
                    */}

                </div>
            </nav>
        );
    }
}