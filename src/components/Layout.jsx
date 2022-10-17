import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import {AppBar, Typography} from "@mui/material";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const Layout = () => {
    return <>
        <AppBar position={"static"} sx={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "space-around",
            alignItems: "center",
            mb: 5
        }}>
            <Typography variant={"h6"}><NavLink sx={{textDecoration: 'none'}} to={'/'}>Home</NavLink></Typography>
            <Typography variant={"h6"}><NavLink sx={{textDecoration: 'none'}} to={'/chats'}>Chats</NavLink></Typography>
            <Typography variant={"h6"}><NavLink sx={{textDecoration: 'none'}}
                                                to={'/profile'}>Profile</NavLink></Typography>
            <WbSunnyOutlinedIcon sx={{}}></WbSunnyOutlinedIcon>
        </AppBar>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>

        </footer>
    </>
}

export default Layout;