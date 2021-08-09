import {store} from "../../redux/store";
import {Typography} from "@material-ui/core";

const achievements = {
    clubstep:{
        isUnlocked: () => store.getState().buildings.clubber >= 1,
        text: <>
            <Typography color="inherit">Clubstep</Typography>
            Hire <b>1</b> clubber.
        </>,
        img: "http://i.imgur.com/k6W8MW9.png"
    },
    clubParty:{
        isUnlocked: () => store.getState().buildings.clubber >= 10,
        text: <>
            <Typography color="inherit">Club Party
            </Typography>
            Hire <b>10</b> clubbers.
        </>,
        img: "http://i.imgur.com/LRhDWi7.png"
    },
    theClubhouse:{
        isUnlocked: () => store.getState().buildings.clubber >= 50,
        text: <>
            <Typography color="inherit">The Clubhouse
            </Typography>
            Hire <b>50</b> clubbers.
        </>,
        img: "http://i.imgur.com/tIHqvj8.png"
    },
    clubTheNation:{
        isUnlocked: () => store.getState().buildings.clubber >= 100,
        text: <>
            <Typography color="inherit">Club the Nation
            </Typography>
            Hire <b>100</b> clubbers.
        </>,
        img: "http://i.imgur.com/zIFpGEb.png"
    },
    clubTheWorld:{
        isUnlocked: () => store.getState().buildings.clubber >= 150,
        text: <>
            <Typography color="inherit">Club the World
            </Typography>
            Hire <b>150</b> clubbers.
        </>,
        img: "http://i.imgur.com/2Kpfgha.png"
    },
    clubTheUniverse :{
        isUnlocked: () => store.getState().buildings.clubber >= 200,
        text: <>
            <Typography color="inherit">Club the Universe
            </Typography>
            Hire <b>200</b> clubbers.
        </>,
        img: "http://i.imgur.com/sqh5GGD.png"
    },
    clubReality:{
        isUnlocked: () => store.getState().buildings.clubber >= 300,
        text: <>
            <Typography color="inherit">Club Reality
            </Typography>
            Hire <b>300</b> clubbers.
        </>,
        img: "http://i.imgur.com/4wh5BY0.png"
    },
    clubToInfinity:{
        isUnlocked: () => store.getState().buildings.clubber >= 400,
        text: <>
            <Typography color="inherit">Club to Infinity
            </Typography>
            Hire <b>400</b> clubbers.
        </>,
        img: "http://i.imgur.com/JruQMzO.png"
    },
    beelzeclub:{
        isUnlocked: () => store.getState().buildings.clubber >= 500,
        text: <>
            <Typography color="inherit">Beelzeclub
            </Typography>
            Hire <b>500</b> clubbers.
        </>,
        img: "http://i.imgur.com/eecKJ8i.png"
    },
    club:{
        isUnlocked: () => store.getState().buildings.clubber >= 700,
        text: <>
            <Typography color="inherit">Club</Typography>
            Hire <b>700</b> clubbers.
        </>,
        img: "http://i.imgur.com/20i38CD.png"
    },
    // namePls:{
    //     isUnlocked: () => store.getState().game.clubberDamage >= 10000000000,
    //     text: <>
    //         <Typography color="inherit">Clubbed to Death
    //         </Typography>
    //         Deal <b>10,000,000,000</b> damage to the wall with your clubbers.
    //     </>,
    //     img: "http://i.imgur.com/k6W8MW9.png"
    // },

}

export const {
    clubstep,
    clubParty,
    theClubhouse,
    clubTheNation,
    clubTheWorld,
    clubTheUniverse,
    clubReality,
    clubToInfinity,
    beelzeclub,
    club
} = achievements;