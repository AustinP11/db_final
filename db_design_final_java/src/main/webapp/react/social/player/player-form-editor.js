import playerService from "./player-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const PlayerFormEditor = () => {
        const {id} = useParams()
        const [player, setPlayer] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findPlayerById(id)
                }

        }, []);
        const createPlayer = (player) =>
            playerService.createPlayer(player)
            .then(() => history.back())


        const findPlayerById = (id) =>
            playerService.findPlayerById(id)
            .then(player => setPlayer(player))
        const deletePlayer = (id) =>
            playerService.deletePlayer(id)
            .then(() => history.back())

        const updatePlayer = (id, newPlayer) =>
            playerService.updatePlayer(id, newPlayer)
            .then(() => history.back())


        return (
        <div>
                <h2>Player Editor</h2>
                <label>ID</label>
                <input value={player.id}/><br/>
                <label>First Name</label>
                <input
                    onChange={(e) =>
                        setPlayer(player =>
                            ({...player, firstname: e.target.value}))}
                    value={player.firstname}/>
                <label>Last Name</label>
                <input
                    onChange={(e) =>
                        setPlayer(player =>
                            ({...player, lastname: e.target.value}))}
                    value={player.lastname}/>
                <label>Points</label>
                <input
                    onChange={(e) =>
                        setPlayer(player =>
                            ({...player, points: e.target.value}))}
                    value={player.points}/>
                <label>Active</label>
                <input
                    onChange={(e) =>
                        setPlayer(player =>
                            ({...player, active: e.target.value}))}
                    value={player.active}/>
                <label>Team</label>
                <input
                    onChange={(e) =>
                        setPlayer(player =>
                            ({...player, teamId: e.target.value}))}
                    value={player.teamId}/>

                <button
                    onClick={() => {
                            history.back()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deletePlayer(player.id)}>
                        Delete
                </button>
                <button
                    onClick={() => createPlayer(player)}>
                        Create
                </button>
                <button
                    onClick={() => updatePlayer(player.id, player)}>
                        Save
                </button>


        </div>
    )
}

export default PlayerFormEditor