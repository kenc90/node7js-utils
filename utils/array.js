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

function findObject(arr, key, value = '*'){
    for(let i = 0; i < arr.length; i++){
        if(key in arr[i] && (arr[i][key] === value || value === '*')){
            return arr[i];
        }
    }
    return null;
}

function findObjects(arr, key, value = '*'){
    let resultList = [];
    for(let i = 0; i < arr.length; i++){
        if(key in arr[i] && (arr[i][key] === value || value === '*')){
            resultList.push(arr[i]);
        }
    }
    return resultList;
}


function objectListToDict(arr, key){
    let dict = {};
    for(let i = 0; i < arr.length; i++){
        if(key in arr[i]){
            dict[arr[i][key]] = arr[i];
        }
    }
    return dict;
}





module.exports = {
    removeItem: removeItem,
    removeAt: removeAt,
    insert: insert,
    addUnique: addUnique,
    unique: unique,
    findObject: findObject,
    findObjects: findObjects,
    objectListToDict: objectListToDict,
}