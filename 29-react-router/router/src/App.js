import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav id="nav">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/about">About</NavLink>
          <NavLink exact to="/users/tom">Tom's page</NavLink>
          <NavLink exact to="/users/jerry">Jerry's page</NavLink>
          <NavLink exact to="/users">Users</NavLink>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:userID">
            <Users />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  const match = useRouteMatch();
  return <h2>Hello {match.params.userID}</h2>;
}

function NoMatch() {
  return <img src="https://http.cat/404.jpg" alt='404' />
}
