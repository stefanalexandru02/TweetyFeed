import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import AOS from 'aos';
import { Layout } from './components/Layout/Layout.jsx';
import { Home } from './components/Pages/Home.jsx';
import { About } from './components/Pages/About.jsx';

import { Login } from './components/Pages/User/Login.jsx';

import $ from 'jquery';

import './site.scss';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            username: ''
        };
    }

    componentDidMount() {
        AOS.init();

        $.ajax({
            url: "/api/auth/user",
            type: 'GET',
            async: true,
            headers: { "Authorization": localStorage.getItem('token') },
            statusCode: {
                401: function () {
                    if (window.location.href.indexOf('/user/login') === -1)
                        window.location.href = "/user/login";
                    else {
                        this.setState({ loading: false });
                    }
                }.bind(this)
            },
            success: function (response) {
                localStorage.setItem('username', response.username);
                this.setState({ username: response.username }, () => {
                    this.setState({ loading: false });
                });

            }.bind(this), error: function (response) { console.log(response); }.bind(this)
        });
    }

    render() {
        if (this.state.loading === true) {
            return (<p>...</p>);
        }
        else {
            return (
                <Switch>
                    <Layout username={this.state.username}>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/about' component={About}></Route>

                        <Route exact path='/user/login' component={Login}></Route>
                    </Layout>
                </Switch>
            );
        }
    }
}