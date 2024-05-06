// add whatever parameters you deem necessary
function isSubsequence(subSeq, seq) {
    let seqPointer = 0;

    for (let i = 0; i < subSeq.length; i++) {
        while (true) {
            if (seqPointer >= seq.length) {
                return false;
            }
            seqPointer++;
            if (subSeq[i] === seq[seqPointer - 1]) {
                break;
            }
        }
    }
    return true;
}
