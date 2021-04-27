const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineTeamEditor = ({team, deleteTeam, updateTeam}) => {
    const [teamCopy, setTeamCopy] = useState(team)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={teamCopy.name}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={teamCopy.sport}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, sport: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={teamCopy.record}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, record: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={teamCopy.lastGame}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, lastGame: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={teamCopy.userId}
                            onChange={(e)=>setTeamCopy(teamCopy => ({...teamCopy, userId: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/team/${teamCopy.id}/player`}>
                            Player
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateTeam(teamCopy.id, teamCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteTeam(team.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/team/${teamCopy.id}`}>
                            {teamCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/team/${teamCopy.id}`}>
                            {teamCopy.sport}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/team/${teamCopy.id}`}>
                            {teamCopy.record}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/team/${teamCopy.id}`}>
                            {teamCopy.lastGame}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/team/${teamCopy.id}`}>
                            {teamCopy.userId}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/team/${teamCopy.id}/players`}>
                            Player
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineTeamEditor;