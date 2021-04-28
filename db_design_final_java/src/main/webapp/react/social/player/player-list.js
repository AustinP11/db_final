const {Link, useHistory} = window.ReactRouterDOM;
import playerService from "./player-service"
const { useState, useEffect } = React;

const PlayerList = () => {
  const history = useHistory()
  const [player, setPlayer] = useState([])
  useEffect(() => {
    findAllPlayers()
  }, [])
  const findAllPlayers = () =>
      playerService.findAllPlayers()
      .then(player => setPlayer(player))
  return(
        <div>
          <h2>Player</h2>
          <button onClick={() => history.push("/player/new")}>
            Add Player
          </button>

          <ul>
            {
              player.map(player =>
                  <li key={player.id}>
                    <Link to={`/player/${player.id}`}>
                    {player.lastname},
                    {player.firstname}
                    </Link>
                    | Team-
                    <Link to={`/team/${player.teamId}`}>
                      {player.teamId}
                    </Link>
                  </li>)
            }
          </ul>
        </div>
    )
}

export default PlayerList;