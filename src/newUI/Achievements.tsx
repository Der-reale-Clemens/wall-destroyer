import {FC} from "react";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {orderArray} from "../constants";
import {Achievement} from "../components/upgradsAndAchievements/Achievement";


export const Achievements: FC = () => {
    const achievements = useSelector((state: AppState) => state.achievements.achievements);

    const a = achievements.map((a) =><td style={{display:"inline-block"}}><Achievement name={a}/></td> )

    return <table style={{display: "block"}}>
        {a}
    </table>

    //return <table>
    //    <AchievementsRow name="Wall" order={wallAchievements}/>
    //</table>
}

interface Props {
    name: string;
    order: any
}

const AchievementsRow: FC<Props> = ({order, name}) => {
    const allAchievements = useSelector((state: AppState) => state.achievements.achievements);

    // @ts-ignore
    const achievements = allAchievements.filter(a => Object.keys(order).includes(a));

    console.log(achievements)

    return <tr>
        <th>{name}</th>
        {orderArray(achievements, Object.keys(order))
            .map((a: any) => <th>
                <Achievement name={a}/>
            </th>)}
    </tr>
}