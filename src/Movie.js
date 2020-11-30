import React, { Component } from 'react';
import UsersWhoLikedMovie from './UsersWhoLikedMovie.js'

class Movie extends Component {
  render() {
    const movieName = this.props.movie.name;
    const usersPerMovie = this.props.profiles
    	.filter((profile) => (parseInt(profile.favoriteMovieID, 10) === parseInt(this.props.movie.id, 10)))
    	.map((profile) => (this.props.users[profile.userID]));
    
    return (
      <div>
      	<h2>{movieName}</h2>
      
        <UsersWhoLikedMovie users={usersPerMovie} />
      </div>
    )
  }
}

export default Movie;