import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Home from './Pages/Home/index.jsx';
import CsvInfo from './Pages/CsvInfo/index.jsx'
import Settings from './Pages/Settings/index.jsx'

const Routes = () => {
    return (
        <HashRouter>
            <Route component={Home} exact path="/"/>
            <Route component={CsvInfo} exact path="/csv"/>
            <Route component={Settings} exact path="/settings"/>
        </HashRouter>
    );
} 

export default Routes;