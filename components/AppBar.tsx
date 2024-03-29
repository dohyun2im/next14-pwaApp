"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MuiAppbar } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface Props {
    children: React.ReactNode;
}

const AppBar = ({ children }:Props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MuiAppbar position="static" color="info">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PWA
                    </Typography>
                    {children}
                </Toolbar>
            </MuiAppbar>
        </Box>
    );
}

export default AppBar;
