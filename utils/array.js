module.exports.removeItem = function (arr, item) {
    let index = arr.indexOf(item);
    if (index > -1) {
        arr.splice(index, 1);
    }
}

module.exports.removeAt = function (arr, index) {
    if (index > -1) {
        arr.splice(index, 1);
    }
}


module.exports.insert = function(arr, index, item){
    arr.splice(index, 0, item);
}


module.exports.addUnique = function(arr, item){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == item)
            return;
    }
    arr.push(item);
}