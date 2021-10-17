import {FC} from "react";
import {StoryDialog} from "./StoryDialog";
import {stories} from "../constants/stories";

export const StoryDisplay: FC = () => <>
        {Object.keys(stories).map(s => <StoryDialog key={s} story={s}/>)}
    </>


