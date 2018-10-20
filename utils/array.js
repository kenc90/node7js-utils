function removeItem(arr, item) {
    let index = arr.indexOf(item);
    if (index > -1) {
        arr.splice(index, 1);
    }
}

function removeAt(arr, index) {
    if (index > -1) {
        arr.splice(index, 1);
    }
}


function insert(arr, index, item) {
    arr.splice(index, 0, item);
}

function addUnique(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item)
            return;
    }
    arr.push(item);
}

function unique(arr) {
    let resultArr = [];
    for(let i = 0; i < arr.length; i++){
        addUnique(resultArr, arr[i]);
    }
    return resultArr;
}





module.exports = {
    removeItem: removeItem,
    removeAt: removeAt,
    insert: insert,
    addUnique: addUnique,
    unique: unique,
}