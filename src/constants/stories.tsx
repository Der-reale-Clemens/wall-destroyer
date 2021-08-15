import {store} from "../redux/store";

interface Story {
    name: string;
    text: string;
    trigger: () => boolean;
}

export type StoryKeys = keyof typeof stories;

export const stories: {[key: string]: Story} = {
    intro2: {
        name: "What's this Wall?",
        text: "You don't like walls, never did. You might even say their your archenemies. You not sure why exactly, they " +
            "haven't done anything specifically wrong, but it doesn't matter. This wall must go, even it means you have " +
            "to punch it to bits by yourself.",
        trigger: () => store.getState().game.damage >= 0,
    },
    intro: {
        name: "Welcome",
        text: "Hello there, welcome to Wall Destroyer:Rewritten, this is a modern rewrite of the original Wall Destroyer " +
            "by Tellurium. I hope you have fun and tell me about your experience with this game so that it may improve.",
        trigger: () => store.getState().game.damage >= 0,
    },
    puncher: {
        name: "Helpers",
        text: "You realize that this might take a while to do by yourself, maybe you should hire some people to help you? " +
            "Like-minded brothers in arms who despise walls just like you. You just need to pay them a bit to quit their " +
            "current job and join you.",
        trigger: () => store.getState().game.damage >= 20,
    },
    upgrades: {
        name: "Upgrades",
        text: "Now that you've got your first companion you might want to do some research to improve everyones wall " +
            "destroying capabilities. So you start the RUC~Realistic Upgrades Corporation, \"A good name\"- you tell yourself.",
        trigger: () => store.getState().buildings.puncher >= 1,
    },
    firstWall: {
        name: "Wall Destroyer",
        text: "With a final punch the wall breaks, \"It is finally done!\", you say. You're done the wall is no more, ready " +
            "to go home and live a normal live now you are turning around when behind the dust you can see it. A SECOND wall, " +
            "time for more wall destroying.",
        trigger: () => store.getState().game.wall >= 1,
    }
}