// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
