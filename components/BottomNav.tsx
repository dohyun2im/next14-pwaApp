"use client";

import ArchiveIcon from "@mui/icons-material/Archive";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

const BottomNav = () => {
    return (
        <Paper  sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation showLabels>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
            </BottomNavigation>
        </Paper>
    );
}

export default BottomNav;
