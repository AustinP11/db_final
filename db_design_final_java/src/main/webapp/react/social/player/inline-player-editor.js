const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlinePlayerEditor = ({player, deletePlayer, updatePlayer}) => {
    const [playerCopy, setPlayerCopy] = useState(player)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={playerCopy.firstname}
                            onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, firstname: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={playerCopy.lastname}
                            onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, lastname: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={playerCopy.points}
                            onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, points: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={playerCopy.active}
                            onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, active: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={playerCopy.teamId}
                            onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, teamId: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/team/${playerCopy.id}/player`}>
                            Player
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updatePlayer(playerCopy.id, playerCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deletePlayer(player.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/player/${playerCopy.id}`}>
                            {playerCopy.firstname}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/player/${playerCopy.id}`}>
                            {playerCopy.lastname}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/player/${playerCopy.id}`}>
                            {playerCopy.points}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/player/${playerCopy.id}`}>
                            {playerCopy.active}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/player/${playerCopy.id}`}>
                            {playerCopy.teamId}
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

export default InlinePlayerEditor;