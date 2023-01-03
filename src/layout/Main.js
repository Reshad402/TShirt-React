import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Home/Header/Header';

const Main = () => {
    return (
        <div>
            <h3>This is main here link is added</h3>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main; 