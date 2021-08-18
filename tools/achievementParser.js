const fs = require("fs");


const constructFromFrame = (name, building, amount, text, img) => {
    const s = `${name}:{\n`+
        `isUnlocked: () => store.getState().buildings.${building} >= ${amount},\n`+
        `text: ${text},\n` +
        `img: "${img}"\n`+
        `},`;
    console.log(s);
    return s;
}

const constructText = (name, body) => {
    body = String(body).replaceAll('<br>', '\n<br/>')
    return `<>
        <Typography color="inherit">${name}</Typography>
        ${body}
    </>`
}

const changeBuildingName = (name) => {
    switch (name) {
        case "handDamage": return "handDamage"
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

const convert = (data, name) => {
    const g = (text, regex) => {
        console.log(text);
        return regex.exec(text)[1]
    }

    const amount = g(data, /-unlocks at (\d+)/g);
    const building = changeBuildingName(g(data, /-unlocks at \d+ (\w+)/g));
    const textName = g(data,/-named ([\w\s]+)/g);
    const textBody = g(data, /-"(.*?)"/g);
    const pictureUrl = g(data, /-picture : ([^\s]+)/g);

    const text = constructText(textName, textBody);

    return constructFromFrame(name, building, amount, text, pictureUrl);
}

fs.readFile("inputAchievements.txt", (e, data) => {
    if(e) console.err(e);
    const achievementArray = data.toString().split(/\*[\w\d]+/g).filter(e => e.length >= 2);

    let d = ""
    for(const achievementData of achievementArray) {
        d += convert(achievementData, "namePls") +"\n";
    }

    fs.writeFile("achievements.txt", d, (err) => {
        if(err) console.err(err);
    });
})