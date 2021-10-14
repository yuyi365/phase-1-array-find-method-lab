/* Function Purpose:
    1. Test if the array object is "W"
    2. If it is W, return value of key
    result is the key

*/

// const superbowlWin = (object) => {
//     let winningResults = object.result === "W";

//     if (winningResults) {
//         return winningResults.year;
//     } else {
//         return undefined;
//     }
// }

const winningTest = (object) => {
    return object.result === "W"
}

// let listOfRecords = record.find(superbowlWin);
//     if (listOfRecords) {
//         console.log(listOfRecords.year);
//     } else{
//         console.log(undefined);
//     }

const superbowlWin = (object) => {
    let winningResults = object.find(winningTest);
    
    if (winningResults) {
        return winningResults.year;
    } else {
        return undefined;
    }
} 