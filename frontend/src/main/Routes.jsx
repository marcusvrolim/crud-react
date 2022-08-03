import React from 'react';
import {Routes, Route, Router} from 'react-router-dom';

import Home from '../components/home/Home';
import UserCrud from '../user/UserCrud';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/users" element={<UserCrud/>}/>
        <Route path="*" element={<Home/>}/>
    </Routes>
