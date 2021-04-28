const {Link, useHistory} = window.ReactRouterDOM;
import teamService from "./team-service"
const { useState, useEffect } = React;

const TeamList = () => {
  const history = useHistory()
  const [team, setTeam] = useState([])
  useEffect(() => {
    findAllTeams()
  }, [])
  const findAllTeams = () =>
      teamService.findAllTeams()
      .then(team => setTeam(team))
  return(
        <div>
          <h2>Team</h2>
          <button onClick={() => history.push("/team/new")}>
            Add Team
          </button>

          <ul>
            {
              team.map(team =>
                  <li key={team.id}>
                    <Link to={`/team/${team.id}`}>
                    {team.name},
                    {team.sport},
                    {team.record},
                      {team.lastGame}
                    </Link>
                      |   User-
                    <Link to={`/users/${team.userId}`}>
                      {team.userId}
                    </Link>
                  </li>)
            }
          </ul>
        </div>
    )
}

export default TeamList;