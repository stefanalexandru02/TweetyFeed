import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            tweets: []
        }
    }

    componentDidMount() {

        fetch('/api/tweets/')
            .then(response => response.json())
            .then(data => {
                if (data === null || data === undefined)
                    data = [];
                if (data === "Authentication credentials were not provided.") {
                    //redirect to login page ;)                    
                    return;
                }
                this.setState({ isLoading: false, tweets: data });
            });
    }

    render() {
        if (this.state.isLoading === true) {
            return (
                <p>.....</p>
            );
        }
        return (
            <>
                {/* {
                    this.state.tweets.map(tw =>
                        <div key={tw.id}>
                            <h4>{tw.title}</h4>
                            <p>{tw.text}</p>
                            <br />
                        </div>
                    )
                } */}
            </>
        );
    }
}