export const phoneNumberFormatter = (value) => {
    return value.replace(/(\d{5})(\d{5})/, "+91 $1 $2");
}

export const aadharNumberFormatter = (value) => {
    if (value.length === 4) {
        value = value + '-';
    }
    if (value.length === 9) {
        value = value + '-';
    }
    return value;
}