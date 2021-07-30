
interface Wall {
    cost: number;
    bricks: number;
    knowledge: number;
    text: JSX.Element;
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
        </>
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
        </>
    }
]