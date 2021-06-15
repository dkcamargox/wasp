import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home/index.jsx';
import CsvInfo from './Pages/CsvInfo/index.jsx'
import Settings from './Pages/Settings/index.jsx'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} exact path="/"/>
            <Route component={CsvInfo} exact path="/csv"/>
            <Route component={Settings} exact path="/settings"/>
        </BrowserRouter>
    );
} 

export default Routes;