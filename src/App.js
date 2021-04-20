import { Route, Switch } from "react-router";
import ComposeTeam from "./components/ComposeTeam";
import FirstQuarter from "./components/FirstQuarter";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
    <h1 className="Head">Basketball Team Manager</h1>
    <Navbar/>
      <Switch>
        <Route exact path ="/" component={ComposeTeam}/>
        <Route path ='/first' component={FirstQuarter}/>
      </Switch>
    </div>
  );
}

export default App;
