import {store} from "./redux/store";

const numberformat = require('swarm-numberformat');

export const scaling = 1.1;

export const calculateNextBuildingCost = (amount: number, baseCost: number): number =>
    baseCost * Math.pow(scaling, amount)


export const prettify = (num: number): string => {
    if(num === undefined)
        return "0";
    if (num <= 100) {
        return (Math.round(num * 1000) / 1000).toString();
    }
    const format = store.getState().system.format;
    //const format = "standard";
    //return (Math.round(num*1000)/1000).toString();
    return numberformat.format(num, {format, sigfigs: 4});
};

export const orderArray = (array: any[], order: any[]) =>
    array.sort((a: any, b: any) =>
        order.indexOf(a) > order.indexOf(b) ? 1 : -1);

export const simpleArrayEquals = <T>(a: T[], b: T[]) => (a.length === b.length
    && a.every((val, index) => val === b[index]))

export const allBuildings = (): number => Object.values(store.getState().buildings)
    .reduce((acc, b) => acc + b);