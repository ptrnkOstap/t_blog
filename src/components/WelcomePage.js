import {Routes, NavLink, Route, Outlet} from "react-router-dom";
import {Typography} from "@mui/material";

function WelcomePage() {
    return <>
        <Typography variant={"h1"} sx={{pt: 10}}> Hello there </Typography>
    </>;
}

export default WelcomePage;

