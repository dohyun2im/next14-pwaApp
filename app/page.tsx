"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useEffect, useState } from "react";
import { Download } from "@mui/icons-material";

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
        outcome: "accepted" | "dismissed";
        platform: string;
    }>;

    prompt(): Promise<void>;
}

export default function Home() {
    const [prompt, setPrompt] = useState<Event | null>(null);

    const installApp = () => {
        if (!prompt) return;
        (prompt as BeforeInstallPromptEvent)?.prompt();
    };

    useEffect(() => {
        const handlePrompt = (e: Event) => {
            e.preventDefault();
            setPrompt(e);
        };
        window.addEventListener("beforeinstallprompt", handlePrompt);
        return () => window.removeEventListener("beforeinstallprompt", handlePrompt);
    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="success">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit" onClick={installApp} disabled={prompt === null} startIcon={<Download/>}>
                            App
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </>
    );
}
