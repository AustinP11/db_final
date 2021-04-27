const TEAMS_URL = "http://localhost:8080/api/team"

export const findAllTeams = () =>
    fetch(TEAMS_URL)
    .then(response => response.json())


export const findTeamById = (id) =>
    fetch(`${TEAMS_URL}/${id}`)
    .then(response => response.json())


export const deleteTeam = (id) =>
    fetch(`${TEAMS_URL}/${id}`, {
      method: "DELETE"
    })


export const createTeam = (team) =>
    fetch(TEAMS_URL, {
      method: 'POST',
      body: JSON.stringify(team),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


export const updateTeam = (id, team) =>
    fetch(`${TEAMS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(team),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


export default {
  findAllTeams,
  findTeamById,
  deleteTeam,
  createTeam,
  updateTeam
}
