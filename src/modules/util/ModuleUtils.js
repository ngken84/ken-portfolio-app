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

export const getLevelClass = (level) => {
    switch(level) {
        case 5: 
            return 'u-margin-left-xlarge';
        case 4:
            return 'u-margin-left-large';
        case 3: 
            return 'u-margin-left-medium';
        case 2:
            return 'u-margin-left-small';
        default: 
            return 'u-margin-left-none';
    }
}