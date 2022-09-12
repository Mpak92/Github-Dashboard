const getDate = (dstring) => {
    const objDate = new Date(dstring);
    const y = objDate.getFullYear();
    let m = objDate.getMonth() + 1;
    if (m < 10) m = '0' + m;
    let d = objDate.getDate();
    if (d < 10) d = '0' + d;
    let h = objDate.getHours();
    if (h < 10) h = '0' + h;
    let min = objDate.getMinutes();
    if (min < 10) min = '0' + min;
    const date = d + '.' + m + '.' + y + ' ' + h + ':' + min;
    return date;
}

export default getDate;