import {store} from "./redux/store";

const numberformat = require('swarm-numberformat');

export const scaling = 1.1;

export const calculateNextBuildingCost = (amount: number, baseCost: number): number =>
    baseCost * Math.pow(scaling, amount)


export const prettify = (num: number): string => {
    const format = store.getState().system.format;
    return numberformat.format(num, {format});
};

export const simpleArrayEquals = <T>(a: T[], b: T[]) => (a.length === b.length
    && a.every((val, index) => val === b[index]))