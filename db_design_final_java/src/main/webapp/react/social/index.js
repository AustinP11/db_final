import UserList from "./users/user-list";
import TeamList from "./team/team-list";
import PlayerList from "./player/player-list";
import UserFormEditor from "./users/user-form-editor";
import TeamFormEditor from "./team/team-form-editor";
import PlayerFormEditor from "./player/player-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path={["/team", "/"]} exact={true}>
                    <TeamList/>
                </Route>
                <Route path={["/player", "/"]} exact={true}>
                    <PlayerList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path="/team/:id" exact={true}>
                    <TeamFormEditor/>
                </Route>
                <Route path="/player/:id" exact={true}>
                    <PlayerFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
