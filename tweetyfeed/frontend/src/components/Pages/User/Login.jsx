import React, { Component } from 'react';
import $ from 'jquery';

export class Login extends Component {
    static displayName = Login.name;

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            invalidLoginCredentials: false
        }
    }

    onLoginClick() {
        $.ajax({
            url: "/api/auth/login",
            type: 'POST',
            async: true,
            statusCode: {
                400: function () {
                    this.setState({ invalidLoginCredentials: true });
                }.bind(this)
            },
            data: {
                "username": this.state.username,
                "password": this.state.password
            },
            success: function (response) {
                localStorage.setItem('token', "Token " + response.token);
                this.props.history.push('/');
            }.bind(this),
            error: function (response) { console.log(response); }.bind(this)
        });
    }

    onRegisterClick() {

    }

    onSwitchToRegister() {

    }

    onSwitchToLogin() {

    }

    render() {
        let invalidCred = this.state.invalidLoginCredentials ? <label className="text-danger">Invalid login credentials</label> : <></>;

        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card loginCard">
                        <div className="card-header">
                            Login
                        </div>
                        <div className="card-body">
                            <br />
                            <br />
                            <div className="form-group">
                                <label>Username:</label>
                                <input className="form-control"
                                    placeholder="Username"
                                    defaultValue={this.state.username}
                                    onChange={(e) => {
                                        this.setState({ username: e.target.value });
                                    }} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Password:</label>
                                <input className="form-control" type="password"
                                    placeholder="Password"
                                    defaultValue={this.state.password}
                                    onChange={(e) => {
                                        this.setState({ password: e.target.value });
                                    }} />
                            </div>
                            {invalidCred}
                            <br />
                            <br />
                            <button className="btn btn-success btn-block no-outline" onClick={() => { this.onLoginClick(); }}>Login</button>
                            <br />
                        </div>
                        <div className="card-footer">
                            <br />
                            <label >or</label>
                            <br /><br />
                            <button className="btn btn-info btn-block no-outline" style={{ padding: '10px' }} onClick={() => { this.onSwitchToRegister(); }}>Register</button>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }
}