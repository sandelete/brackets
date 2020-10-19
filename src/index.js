module.exports = function check(str, bracketsConfig) {
    let bom = '';
    let piter = 0;

    do {
        let iter = 0;

        for (let i = 0; i < bracketsConfig.length; i++) {
            let pair = bracketsConfig[i].join('');
            if (str.includes(pair)) {
                bom = str.replace(pair, '');
                iter++;
            }
        }

        piter = iter;
    } while (piter === 0);

    if (str === '') {
        return true;
    } else {
        return false;
    }
};

module.exports = function check(str, bracketsConfig) {
    while (true) {
        let i = 0;
        bracketsConfig.forEach(item => {
            if (str.includes(item[0] + item[1])) {
                str = str.replace(item[0] + item[1], '')
                i++;
            }
        })
        if (i === 0) {
            break;
        }
    }
    if (str === '') {
        return true;
    } else {
        return false;
    }
}