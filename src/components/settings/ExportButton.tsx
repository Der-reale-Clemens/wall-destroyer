import {FC} from "react";
import {Button} from "@material-ui/core";
import {constructSave} from "../../functions/save";
import {useDispatch} from "react-redux";
import {addNotification} from "../../redux/SystemSlice";

export const ExportButton: FC = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        const save = constructSave();
        navigator.clipboard.writeText(save).then(() => {
            dispatch(addNotification({message: "Save copied to clipboard", options: {variant: "success"}}))
        }, () => {
            dispatch(addNotification({message: "Export failed", options: {variant: "error"}}))
        });
    }

    return (<>
        <Button variant="contained"
                size="small"
                color="primary"
                onClick={onClick}>
            Export
        </Button>
    </>)
}