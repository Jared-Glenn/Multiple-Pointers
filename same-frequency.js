// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    
    if(num1.length !== num2.length) {
        return false;
    }

    function frequencyCount(string) {
        const counter = {};

        for (num of string) {
            let valCount = counter[num] || 0;
            counter[num] = valCount + 1;
        }
        return counter;
    }

    const counter1 = frequencyCount(num1);
    const counter2 = frequencyCount(num2);
    console.log("Counter1", counter1);
    console.log("Counter2", counter2);

    for (num of string) {
        //PICK UP HERE! Needs to check each letter individually, I think!
    }
        if (counter1 !== counter2) {
            return false;
        }
