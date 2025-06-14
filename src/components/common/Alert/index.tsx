import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertType } from "@/lib/types";
const MUI_SNACKBAR: Record<AlertType, AlertType> = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info"
};
interface ShowAlertProps {
    setHandler: React.Dispatch<React.SetStateAction<{ message: string; type: AlertType } | null>>;
    state?: AlertType;
    message?: string;
}

const ShowAlert: React.FC<ShowAlertProps> = ({
    setHandler,
    state = MUI_SNACKBAR.success,
    message = "Successfully done",
}) => {
    const [open, setOpen] = useState(false);
    const vertical = "top";
    const horizontal = "center";

    // Update handleClose to match Snackbar's event signature
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
            autoHideDuration={2000}
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
