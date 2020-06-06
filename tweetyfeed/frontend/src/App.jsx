import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import AOS from 'aos';
import { Layout } from './components/Layout/Layout.jsx';
import { Home } from './components/Pages/Home.jsx';
import { About } from './components/Pages/About.jsx';

import './site.scss';

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
                    <Route exact path='/about' component={About}></Route>
                </Layout>
            </Switch>
        );
    }
}