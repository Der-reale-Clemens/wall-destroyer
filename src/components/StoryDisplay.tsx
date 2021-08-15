import {FC} from "react";
import {StoryDialog} from "./StoryDialog";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {stories} from "../constants/stories";

export const StoryDisplay: FC = () => {
    const seenStories = useSelector((state: AppState) => state.system.seenStories);

    return (<>
        {Object.keys(stories).map(s => <StoryDialog story={s}/>)}
    </>)
}

