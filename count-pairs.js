// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let pairsCount = 0;
    const candidates = new Set();

    for (const num of arr) {
        if (candidates.has(num)) {
            pairsCount++;
            candidates.delete(num)
        }
        else {
            candidates.add(target - num);
        }
    }
    return pairsCount;
}
