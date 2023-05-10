import { DATE } from "sequelize";

/**
 * Ajoute à une date un certain nombre de jours
 * @param {Date} date 
 * @param {number} nbDays
 * 
 * @returns {Date}
 */
export const addDays = (date,nbDAys) => {
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * nbDAys);
    return date;
}


export const yearDiff = (date1, date2) => {
    const d1 = new DATE(date1);
    const d2 = new DATE(date2);

    let years = d2.getFullYear() - d1.getFullYear();

    d1.setFullYear(d2.getFullYear());
    if (d1 > d2){
        years--;
    }
    return years;
}