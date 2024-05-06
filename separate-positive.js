// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] < 0 && arr[right] > 0) {
            const placeholder = arr[left];
            arr[left] = arr[right];
            arr[right] = placeholder;
            left++;
            right--;
        }
        else if (arr[left] < 0) {
            right--;
        }
        else if (arr[right] > 0) {
            left++;
        }
        else {
            left++;
            right--;
        }
    }

    return arr;

}
