import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export class Navbar extends Component {
    static displayName = Navbar.name;

    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark fixed-top">
                <div className="container">
                    <Link to='/' className="navbar-brand" href="#">TweetyFeed</Link>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul> */}
                        {/* <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link" href="#">{localStorage.getItem('username')} <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => {
                                    $.ajax({
                                        url: "/api/auth/logout",
                                        type: 'POST',
                                        async: true,
                                        headers: { "Authorization": localStorage.getItem('token') },
                                        success: function (response) {
                                            localStorage.removeItem("token");
                                            localStorage.removeItem("username");
                                            window.location.href = "/user/login";
                                        }.bind(this), error: function (response) { console.log(response); }.bind(this)
                                    });
                                }}>Logout <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>
        );
    }
}