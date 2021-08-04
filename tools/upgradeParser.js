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

const constructText = (name, body) => {
    body = String(body).replaceAll('<br>', '<br/>')
    return `<>
        <Typography color="inherit">${name}</Typography>
        ${body}
    </>`
}

const convert = (text, name) => {
    const g = (text, regex) => {
        return regex.exec(text)[1]
    }

    const amount = g(text, /-unlocks at (\d+)/g);
    const building = /-unlocks at \d+ (\w+)/g.exec(text)[1]
    const cost = Number(g(text, /costs (\d+)/g)).toExponential();
    const textName = g(text, /-named ([\w\s]+)/g);
    const textBody = g(text, /-"(.*?)"/g);
    const pictureUrl = g(text, /-picture : ([^\s]+)/g);
    const effect = "{}";

    return constructFromFrame(name, building, amount, cost, effect, constructText(textName, textBody), pictureUrl);
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