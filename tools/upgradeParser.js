const fs = require("fs");

const constructFromFrame = (name, building, amount, cost, effect, text, img) => {
    const s = `${name}:{\n`+
        `isVisible: () => store.getState().buildings.${building} >= ${amount},\n`+
        `isBuyable: () => store.getState().game.money >= ${cost},\n`+
        `buy: (dispatch) => dispatch(decreaseMoney(${cost})),\n`+
        `effect: ${effect},\n`+
        `text: ${text},\n` +
        `img: "${img}"\n`+
        `},`;
    console.log(s);
    return s;
}

const constructText = (name, body, cost) => {
    body = String(body).replaceAll('<br>', '\n<br/>')
    return `<>
        <Typography color="inherit">${name}</Typography>
        ${body}
        <br/>Costs <b>{prettify(${cost})}</b> Cash
    </>`
}

const changeBuildingName = (name) => {
    switch (name) {
        case "puncher": return "puncher";
        case "clubber": return "clubber";
        case "swordsman": return "swordsman";
        case "gunner": return "gunshooter";
        case "grenade": return "grenademan";
        case "wreckingBall": return "wreckingBall";
        case "bulldozer": return "bulldozer";
        case "airstrike": return "airstrikeCaller";
        case "necromancer": return "necromancer";
        case "giant": return "titan";
        case "demon": return "demon";
        default: return name;
    }
}

const convert = (text, name) => {
    const g = (text, regex) => {
        //console.log(regex.exec(text));
        console.log(text);
        return regex.exec(text)[1]
    }

    const amount = g(text, /-unlocks at (\d+)/g);
    const building = changeBuildingName(/-unlocks at \d+ (\w+)/g.exec(text)[1]);
    const cost = Number(g(text, /costs (\d+)/g)).toExponential();
    const textName = g(text, /-named ([\w\s]+)/g);
    const textBody = g(text, /-"(.*?)"/g);
    const pictureUrl = g(text, /-picture : ([^\s]+)/g);
    const effect = "{}";



    return constructFromFrame(name, building, amount, cost, effect, constructText(textName, textBody, Number(cost)), pictureUrl);
}

fs.readFile("input.txt", (e, data) => {
    if(e) console.err(e);
    const upgradeArray = data.toString().split(/\*[\w\d]+/g).filter(e => e.length >= 2);

    let d = ""
    for(const upgradeData of upgradeArray) {
        d += convert(upgradeData, "namePls") +"\n";
        console.log(d);
    }

    fs.writeFile("upgrades.txt", d, (err) => {
        if(err) console.err(err);
    });
})