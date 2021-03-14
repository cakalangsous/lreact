import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home';
import Add from './components/Add'
import Edit from './components/Edit'
import Header from './components/Header';

const App = () => {
    return (
        <Router basename={'/'}>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/add">
                    <Add />
                </Route>

                <Route path="/edit/:id">
                    <Edit />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root') );
