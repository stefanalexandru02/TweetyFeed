import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import AOS from 'aos';
import { Layout } from './components/Layout/Layout.jsx';
import { Home } from './components/Pages/Home.jsx';

export default class App extends Component {
    static displayName = App.name;

    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home}></Route>
                </Layout>
            </Switch>
        );
    }
}