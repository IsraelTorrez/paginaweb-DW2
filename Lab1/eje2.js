for (let i = 1; i <= 50; i++) {
    let line = '';
    for (let j = 1; j <= 50 - i; j++) {
        line += '  ';
    }
    for (let k = 1; k <= i; k++) {
        line += k + ' ';
    }
    console.log(line);
}