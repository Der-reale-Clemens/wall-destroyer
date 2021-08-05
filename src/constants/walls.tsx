import wallImg from "../images/walls/destroyWall.png";
import wall4Img from "../images/walls/wall4.png";
import wallBossImg from "../images/walls/wallBoss.png";


interface Wall {
    cost: number;
    bricks: number;
    knowledge: number;
    text: JSX.Element;
    img: string;
}

export const walls: Wall[] = [
    {
        cost: 1_000_000_000_000,
        bricks: 25,
        knowledge: 1,
        text: <>
            Destroy the wall and move on to a bigger one.
            <br/>Gives <b>25</b> bricks.
            <br/>Awards <b>250,000,000,000</b> cash.
            <br/>Worth <b>1</b> cosmic knowledge.
        </>,
        img: "http://i.imgur.com/KfG2xNP.png"
    },
    {
        cost: 100_000_000_000_000,
        bricks: 100,
        knowledge: 1,
        text: <>
            Destroy the big 2nd wall and move on to a bigger one.
            <br/>Gives <b>100</b> bricks.
            <br/>Awards <b>25,000,000,000,000</b> cash.
            <br/>Worth <b>1</b> cosmic knowledge.
        </>,
        img: "http://i.imgur.com/KfG2xNP.png"
    },
    {
        cost: 10_000_000_000_000_000,
        bricks: 10_000,
        knowledge: 1,
        text: <>
            Destroy the huge 3rd wall and move on to a bigger one.
            <br/>Gives <b>10,000</b> bricks.
            <br/>Awards <b>2,500,000,000,000,000</b> cash.
            <br/>Worth <b>1</b> cosmic knowledge.
        </>,
        img:"http://i.imgur.com/KfG2xNP.png"
    },
    {
        cost: 1_000_000_000_000_000_000,
        bricks: 250_000,
        knowledge: 2,
        text: <>
            Destroy the massive 4th wall and move on to the final one.
            <br/>Gives <b>250,000</b> bricks.
            <br/>Awards <b>250,000,000,000,000,000</b> cash.
            <br/>Worth <b>2</b> cosmic knowledge.
        </>,
        img: wall4Img,
    },
    {
        cost: 100_000_000_000_000_000_000,
        bricks: 10_000_000,
        knowledge: 5,
        text: <>
            Destroy the 5th and final wall.
            <br/>Gives <b>10,000,000</b> bricks.
            <br/>Awards <b>25,000,000,000,000,000,000</b> cash; <b>1</b> boss brick.
            <br/>Worth <b>5</b> cosmic knowledge.
        </>,
        img: wallBossImg,
    },
    {
        cost: Infinity,
        bricks: 0,
        knowledge: 0,
        text: <>
            There are no more walls left, this is the end of the current universe.
        </>,
        img: "http://i.imgur.com/W1iILrI.png",
    }
]