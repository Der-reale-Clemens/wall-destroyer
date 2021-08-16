import React, {FC, useEffect, useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import {stories, StoryKeys} from "../constants/stories";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";

interface Props {
    story: StoryKeys
}

export const StoryDialog: FC<Props> = ({story}) => {
    const seenStories = useSelector((state: AppState) => state.system.seenStories);
    const [activated, setActivated] = useState(false);
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        const isClosed = seenStories.includes(story);
        setClosed(isClosed);
    },[])

    useEffect(() => {
        if(seenStories.includes(story)) {
            setActivated(true);
        }
    }, [seenStories])

    const handleClose = () => {
        setClosed(true);
    }


    return(<>
        <Dialog
            open={activated && !closed}
            fullWidth={true}
            maxWidth="sm"
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{stories[story].name}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {stories[story].text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </>)
}