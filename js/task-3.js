function getElementWidth(content, padding, border) {
    const numerical1 = Number.parseFloat(content);
    const numerical2 = Number.parseFloat(padding);
    const numerical3 = Number.parseFloat(border);
    const getElementWidth = numerical1 + 2 * numerical2 + 2 * numerical3;
    return getElementWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));