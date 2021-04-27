import teamService from "./team-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const TeamFormEditor = () => {
        const {id} = useParams()
        const [team, setTeam] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findTeamById(id)
                }

        }, []);
        const createTeam = (team) =>
            teamService.createTeam(team)
            .then(() => history.back())


        const findTeamById = (id) =>
            teamService.findTeamById(id)
            .then(team => setTeam(team))
        const deleteTeam = (id) =>
            teamService.deleteTeam(id)
            .then(() => history.back())

        const updateTeam = (id, newTeam) =>
            teamService.updateTeam(id, newTeam)
            .then(() => history.back())


        return (
        <div>
                <h2>Team Editor</h2>
                <label>ID</label>
                <input value={team.id}/><br/>
                <label>Name</label>
                <input
                    onChange={(e) =>
                        setTeam(team =>
                            ({...team, name: e.target.value}))}
                    value={team.name}/>
                <label>Sport</label>
                <input
                    onChange={(e) =>
                        setTeam(team =>
                            ({...team, sport: e.target.value}))}
                    value={team.sport}/>
                <label>Record</label>
                <input
                    onChange={(e) =>
                        setTeam(team =>
                            ({...team, record: (e.target.value)}))}
                    value={team.record}/>
                <label>lastGame</label>
                <input
                    onChange={(e) =>
                        setTeam(team =>
                            ({...team, lastGame: e.target.value}))}
                    value={team.lastGame}/>
                <label>User</label>
                <input
                    onChange={(e) =>
                        setTeam(team =>
                            ({...team, userId: (e.target.value)}))}
                    value={team.userId}/>

                <button
                    onClick={() => {
                            history.back()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deleteTeam(team.id)}>
                        Delete
                </button>
                <button
                    onClick={() => createTeam(team)}>
                        Create
                </button>
                <button
                    onClick={() => updateTeam(team.id, team)}>
                        Save
                </button>


        </div>
    )
}

export default TeamFormEditor