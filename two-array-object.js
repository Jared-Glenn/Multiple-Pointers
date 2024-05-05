// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    const res = {};
    
    for (let i = 0; i < keys.length; i++) {
        if (!vals[i]) {
            res[keys[i]] = null;
        }
        else {
            res[keys[i]] = vals[i];
        }
    }
    return res;
}
