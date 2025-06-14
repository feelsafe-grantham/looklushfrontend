import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertType } from "@/lib/types";
const type: AlertType = "success"
interface ShowAlertProps {
    setHandler: React.Dispatch<React.SetStateAction<{ message: string; type: AlertType } | null>>;
    state?: AlertType;
    message?: string;
}

const ShowAlert: React.FC<ShowAlertProps> = ({
    setHandler,
    state = type,
    message = "Successfully done",
}) => {
    const [open, setOpen] = useState(false);
    const vertical = "top";
    const horizontal = "center";


    const handleClose = (event: React.SyntheticEvent | Event, reason: any) => {
        if (reason === "clickaway") {

            return;
        }
        if (typeof setHandler === "function") setHandler(null);
        setOpen(false);
    };

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={1500}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose as any}
                variant="filled"
                severity={state}
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default ShowAlert;
