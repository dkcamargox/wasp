import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home/index.jsx';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} exact path="/"/>
        </BrowserRouter>
    );
} 

export default Routes;