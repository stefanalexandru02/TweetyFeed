import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            tweets: [],
            newPostText: ''
        }
    }

    componentDidMount() {
        $.ajax({
            url: "/api/tweets/",
            type: 'GET',
            headers: { "Authorization": localStorage.getItem('token') },
            async: true,
            statusCode: {
                401: function () {
                    this.props.history.push('/user/login');
                }.bind(this)
            },
            success: function (response) {
                this.setState({ tweets: response, isLoading: false });
            }.bind(this),
            error: function (response) { console.log(response); }.bind(this)
        });
    }

    addPost() {
        axios.post('/api/tweets/', { text: this.state.newPostText }, {
            headers: { "Authorization": localStorage.getItem('token') }
        }).then(res => {
            console.log(res.data);
        });
    }

    render() {
        let noPostsLbl = this.state.tweets.length === 0 ? <label>There are no posts. Please come back later.</label> : <></>;

        if (this.state.isLoading === true) {
            return (
                <p>...</p>
            );
        }
        return (
            <>
                <div>
                    <textarea className="form-control no-outline" style={{ resize: "vertical" }} placeholder="What's on your mind?" rows={3} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            this.addPost();
                        }
                    }} defaultValue={this.state.newPostText} onChange={(e) => { this.setState({ newPostText: e.target.value }); }}></textarea>
                    <br />
                    <button className="btn btn-primary float-right" onClick={() => { this.addPost(); }}>Post</button>
                    <br /><br />
                </div>
                <hr />
                {
                    this.state.tweets.map(tw => {
                        let date = new Date(tw.created_at);
                        let parsed = date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                        return (
                            <div key={tw.id}>
                                <label className="float-right">{parsed}</label>
                                <p>{tw.text}</p>
                                <br />
                            </div>
                        )
                    })
                }
                {noPostsLbl}
                <hr />
            </>
        );
    }
}