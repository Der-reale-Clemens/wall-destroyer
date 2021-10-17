import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {useSnackbar} from "notistack";
import {clearNotifications} from "../redux/AchievementSlice";
import {clearNotifications as clearNotificationsUpgrades} from "../redux/UpgradeSlice";
import {clearNotifications as clearNotificationsSystem} from "../redux/SystemSlice";
import {upgrades} from "../constants/upgrades";
import {achievements} from "../constants/achievements";

export const Notifier: FC = () => {
    const achievementsState = useSelector((state: AppState) => state.achievements.achievements);
    const achievementNotifications = useSelector((state: AppState) => state.achievements.notifications || []);

    const upgradesState = useSelector((state: AppState) => state.upgrades.unlockedUpgrades);
    const upgradeNotifications = useSelector((state: AppState) => state.upgrades.notifications || []);

    const systemNotifications = useSelector((state:AppState) => state.system.notifications || []);
    const lastUpdate = useSelector((state:AppState) => state.system.lastUpdate);
    const { enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();

    useEffect(() => {
        achievementNotifications.forEach((a) => {
            const ach = achievements[a]
            const obj = (<><img style={{paddingRight: "10px"}} src={ach.img} alt="A"/>
                {ach.text.props.children[0]}
                </>)
            enqueueSnackbar(obj);
        })
        dispatch(clearNotifications());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [achievementsState]);

    useEffect(() => {
        upgradeNotifications.forEach((u) => {
            const up = upgrades[u];
            const obj = (<><img style={{paddingRight: "10px"}} src={up.img} alt="A"/>
                {up.text.props.children[0]}
            </>)
            enqueueSnackbar(obj);
        })
        dispatch(clearNotificationsUpgrades());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [upgradesState]);

    useEffect(() => {
        systemNotifications.forEach(s => enqueueSnackbar(s.message, s.options));
        dispatch(clearNotificationsSystem())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastUpdate]);

    return null;
}