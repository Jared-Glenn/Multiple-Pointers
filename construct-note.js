// add whatever parameters you deem necessary
function constructNote(message, letters) {

    function frequencyCount(string) {
        let counter = {};

        for (let letter of string) {
            let valCount = counter[letter] || 0;
            counter[letter] = valCount + 1;
        }

        return counter;
    }

    const letterCounter = frequencyCount(letters);

    for (let letter of message) {
        if (!letterCounter[letter] || letterCounter[letter] === 0) {
            return false;
        }
        else {
            valCount = letterCounter[letter];
            letterCounter[letter] = valCount - 1;
        }
    }
    
    return true;
}
