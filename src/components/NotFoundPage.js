import React from "react";
import {Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

function NotFoundPage() {
    return <Typography variant={"h3"}>
        The page you requested doesn't exist.
        <NavLink to={'/'}> Go to 'Home' page</NavLink>
    </Typography>
}

export default NotFoundPage;