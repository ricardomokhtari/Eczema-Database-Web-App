import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Homepage from './Homepage';
import ViewPage from './components/viewpage';

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" component = {Homepage}>
                            <Homepage />
                        </Route>
                        <Route path="/viewpage" component = {ViewPage}>
                            <ViewPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
          );
        }
    }
 
export default App;