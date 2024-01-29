"use client";

import { Download } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
        outcome: "accepted" | "dismissed";
        platform: string;
    }>;

    prompt(): Promise<void>;
}

const InstallButton = () => {
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
        <Button color="inherit" onClick={installApp} startIcon={<Download />}>
            App
        </Button>
    );
}

export default InstallButton;
