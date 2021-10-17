import React, {FC, useState} from "react";
import {importSave} from "../../functions/save";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";

export const ImportButton: FC = () => {
    const [importText, setImportText] = useState("");
    const [open, setOpen] = useState(false);

    const handleImport = () => {
        if (importText === "") {
            return;
        }
        importSave(importText);
        handleClose()
    }

    const handleTextChange = (value: string) => setImportText(value);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<>
        <Button variant="contained"
                size="small"
                color="primary"
                onClick={handleClickOpen}
                style={{marginBottom:"10px", marginTop:"10px", marginRight: "10px"}}>
            Import
        </Button>
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth="sm"
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Import</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Please enter a save to import. This will override your current save and if you import an invalid
                    save
                    you WILL lose all your progress so be warned.
                </DialogContentText>
                <TextField
                    autoFocus
                    value={importText}
                    onChange={(e) => handleTextChange(e.target.value)}
                    margin="dense"
                    id="name"
                    label="Save"
                    type="text"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Cancel
                </Button>
                <Button onClick={handleImport} variant="contained" color="primary" autoFocus>
                    Import
                </Button>
            </DialogActions>
        </Dialog>
    </>)
}