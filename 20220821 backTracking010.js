// function numberOfWays(book) {
//     let count = 0;
//     let length = book.length;
//     for (let i = 0; i < length - 2; i++) {
//         for (let j = i +1; j < length -1; j++) {
//             for (let k = j+1; k < length; k++) {
//                 if (book[i] === '0' && book[j] ==='1' && book[k]== '0') {count++;}
//                 else if (book[i] === '1' && book[j] ==='0' && book[k]== '1') {count++;}
//                 else {break;}
//             }
//         }
//     }
//     return count;
// }

// Space complexity O(1), time complexity O(N^3)
function numberOfWays(book) {
    let count = 0;
    let ones = 0;
    let zeros= 0;
    let oneZeros =0;
    let zeroOnes = 0;

    for(let i = book.length -1; i>=0; i--) {

        if (book[i] === '1') {
            ones++;
            oneZeros += zeros;
            count += zeroOnes;
        } else {
            zeros++;
            zeroOnes += ones;
            count+= oneZeros;
        }
    }
    
    return count;
}


console.log(numberOfWays('10111'))

// Time complexity O(N), space complexity O(1)

// There are only 2 possible combination: '010' '101'
// I set up a few counters and count from the back
// If I find 1, I will increase the count of 1, increase the count of oneZeros, increase the count of final result
// Do the same thing for 0


// function solution(words) {
//     let containsCount = 0;
//     for (let i = 0; i < words.length -1; i++) {
//         for (let j = i +1; j < words.length; j++) {
//             if (checkContains(words[i], words[j])) {containsCount++}
//         }
//     }
//     return containsCount;
// }

// function checkContains(string1, string2) {
//     let index1 = string1.length - 1;
//     let index2 = string2.length - 1;
//     while (index1  >=0 && index2 >=0) {
//         if (string1[index1] !== string2[index2]) {return false}
//         index1--;
//         index2--;
//     }
//     return true
// }

// console.log(solution(['back', 'backdoor', 'gammon', 'backgammon', 'comeback', 'come', 'door']))
// console.log(solution(['cba', 'a', 'a', 'b', 'ba', 'ca']))
