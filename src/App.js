import './App.css';
import React, {useState, useEffect} from "react";
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import NotFoundPage from "./components/NotFoundPage";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} index element={<WelcomePage/>}></Route>
                <Route path={'/chats'} element={<Chats/>}></Route>
                <Route path={'/chats/:id'} element={<Chats/>}></Route>
                <Route path={'/profile'} element={<Profile/>}></Route>
                <Route path={'*'} element={<NotFoundPage/>}></Route>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}></Route>
        </Routes>
    );
}

export default App;
