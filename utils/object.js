function isObjectExists(obj, level, ...rest) {
    if (obj === undefined) return false
    if (rest.length == 0 && obj.hasOwnProperty(level)) return true
    return isObjectExists(obj[level], ...rest)
}




module.exports = {
    isObjectExists: isObjectExists,
}