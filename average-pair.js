// add whatever parameters you deem necessary
function averagePair(arr, average) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
        const ave = (arr[leftPointer] + arr[rightPointer])/2;

        if (ave === average) {
            return true;
        }
        else if (ave < average) {
            leftPointer++;
        }
        else {
            rightPointer--;
        }
    }
    return false;
}
