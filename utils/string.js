function replaceAll(text, match, replace) {
    return text.split(match).join(replace);
}

function replaceFirst(text, match, replace) {
    return text.replace(match, replace);
}

function replaceLast(text, match, replace) {
    let result = '';
    let arr = text.split(match);
    for (let i = 0; i < arr.length; i++) {
        if (i == 0)
            result += arr[i];
        else if (i == arr.length - 1)
            result += replace + arr[i];
        else
            result += match + arr[i];
    }
    return result;
}

function charCount(text) {
    let arr = Array.from(text);
    return arr.length;
}

function isURL(text) {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(text)) {
        return true;
    }
    else {
        return false;
    }
}


function format(text, ...replaces) {
    for (let i = 0; i < replaces.length; i++) {
        text = replaceAll(text, `{${i}}`, replaces[i]);
    }
    return text;
}

function formatWithDict(text, dict) {
    for (var key in dict) {
        text = replaceAll(text, `{${key}}`, dict[key]);
    }
    return text;
}

function insertAt(text, insertedText, index) {
    return [text.slice(0, index), insertedText, text.slice(index)].join('');
}

function numberWithCommas(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var idCounter = 999;
function generateRuntimeUniqueId(prefix = 'R_T_U_I_D') {
    idCounter++;
    return prefix + '_' + idCounter;
}


module.exports = {
    replaceAll: replaceAll,
    replaceFirst: replaceFirst,
    replaceLast: replaceLast,
    charCount: charCount,
    isURL: isURL,
    format: format,
    formatWithDict: formatWithDict,
    insertAt: insertAt,
    numberWithCommas: numberWithCommas,
    generateRuntimeUniqueId: generateRuntimeUniqueId,
};