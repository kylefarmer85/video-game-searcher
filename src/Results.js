import React from 'react';
import { Link } from 'react-router-dom'
import GameDetails from './GameDetail'

const Results = (props) => {

  return (
    <div className="results-container">
      <ul>
      {
      props.gameResults.map(game => (
        <li key={game.id}>
          <Link to={`/search/${game.id}`}>
          <h3>{game.name}</h3>
          <img src={game.background_image} alt="game"/>
          </Link>
        </li>
      ))
      }
      </ul>
    </div>
  );
}

export default Results;
