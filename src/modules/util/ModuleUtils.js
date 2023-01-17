export const getValidIntValFromString = (value) => {
    if(value.length === 0) {
        return 0;
    } else {
        if(isNaN(value)) {
            return undefined;
        }
        const intVal = parseInt(value);
        if(intVal > 999) {
            return Math.round(intVal/10);
        }
        return intVal
    }
}

export const createValidIntRandomNumber = () => {
    return Math.floor(Math.random() * 1000);
}
