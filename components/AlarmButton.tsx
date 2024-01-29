"use client";

import { Notifications } from "@mui/icons-material";
import Button from "@mui/material/Button";

const AlarmButton= () => {
    const showNotification = () => {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                new Notification("pwa-app", { body: "Hello !", icon: "./logo.png" });
            } else {
                console.log("사용자가 알림을 거부했습니다.");
            }
        });
    };

    return (
        <Button color="inherit" onClick={showNotification} startIcon={<Notifications />}>
            Alarm
        </Button>
    );
}

export default AlarmButton;
