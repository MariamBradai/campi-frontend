import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Countries from "./pages/Countries";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Places from "./pages/Places";
import PlacesDetails from "./pages/PlacesDetails";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login'component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
      <Route exact path='/Countries' component={Countries}/>
      <Route exact path='/Countries/Places' component={Places}/>
      <Route path='/Countries/Places/:id' component={PlacesDetails} />

    </Switch>
  </Router>
  );
}

export default App;