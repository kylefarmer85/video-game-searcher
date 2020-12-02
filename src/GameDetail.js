import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

const GameDetail = ({match}) => {

  const [game, setGame] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect( async () => {
    const response = await fetch(`https://rawg.io/api/games/${match.params.id}`)
    const data = await response.json()
    setGame(data)
    setLoading(false)
  }, [])


  return (
    <div className="game-details">
     
      <h1>{game.name}</h1>
      <p>Released: {game.released}</p>
      <p>Platform(s):</p>

        { 
        loading ? <div>...loading</div> : game.platforms.map(p => <span>{`${p.platform.name} | ` }</span>)
        }

      <br></br>
      <img src={game.background_image} alt='game'/>
      <br></br>
      <img src= {game.background_image_additional} alt='game'/>

      <p id="details">{ ReactHtmlParser(game. description) }</p>
    </div>
  );
}

export default GameDetail;

