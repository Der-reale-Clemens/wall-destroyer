import {FC} from "react";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {orderArray} from "../constants";
import {Achievement} from "../components/upgradsAndAchievements/Achievement";


export const Achievements: FC = () => {
    const achievements = useSelector((state: AppState) => state.achievements.achievements);

    const a = achievements.map((a) =><td key={a} style={{display:"inline-block"}}><Achievement name={a}/></td> )

    return <table style={{display: "block"}}>
        <tbody>
        <tr>
            {a}
        </tr>
        </tbody>
    </table>

    //return <table>
    //    <AchievementsRow name="Wall" order={wallAchievements}/>
    //</table>
}

interface Props {
    name: string;
    order: any
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AchievementsRow: FC<Props> = ({order, name}) => {
    const allAchievements = useSelector((state: AppState) => state.achievements.achievements);

    // @ts-ignore
    const achievements = allAchievements.filter(a => Object.keys(order).includes(a));

    console.log(achievements)

    return <tr>
        <th>{name}</th>
        {orderArray(achievements, Object.keys(order))
            .map((a: any) => <th>
                <Achievement key={a} name={a}/>
            </th>)}
    </tr>
}