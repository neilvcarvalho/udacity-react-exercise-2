import React, { Component } from 'react';

class UsersWhoLikedMovie extends Component {
    render() {
        const userCards = <ul>{this.props.users.map((user) => (<li>{user.name}</li>))}</ul>;

        return (this.props.users.length === 0 ? <p>None of the current users liked this movie</p> : userCards);
    }
}

export default UsersWhoLikedMovie;