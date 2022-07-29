
const deliverySpeedTarget = 1.0;
export const getDarkColor = (value: number) => {
    //red
    if (value < deliverySpeedTarget) return "#d63b3b";
    //green
    else if (value >= deliverySpeedTarget) return "#51ad51";
    //black
    else return "#000000";
    // else if (value > 1) return "#11819d";//blue
};


const productionQualityTarget = 0.5;
export const getDarkColorProd = (value: number) => {
    //red
    if (value > productionQualityTarget) return "#d63b3b";
    //green
    else if (value <= productionQualityTarget) return "#51ad51";
    //black
    else return "#000000";
    // else if (value > 1) return "#11819d";//blue
};
export const getLightColor = (value: number) => {
    //red
    if (value < deliverySpeedTarget) return "#F2C4C4";
    //green
    else if (value >= deliverySpeedTarget) return "#dceedc";
    //black
    else return "#000000";
};
export const getProductionQualityTargetDarkColor = (value: number) => {
    //red
    if (value > productionQualityTarget) return "#F2C4C4";
    //green
    else if (value <= productionQualityTarget) return "#51ad51";
    //black
    else return "#000000";
};

export const getProductionQualityTargetLightColor = (value: number) => {
    //red
    if (value > productionQualityTarget) return "#f9e7e7";
    //green
    else if (value <= productionQualityTarget) return "#dceedc";
    //black
    else return "#000000";
};