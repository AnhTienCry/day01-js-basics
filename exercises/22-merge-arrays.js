/**
 * BÀI 22: Merge 2 array
 * Yêu cầu: Viết hàm gộp 2 mảng thành 1
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function mergeArrays(arr1, arr2) {
    // TODO: Gộp arr1 và arr2 thành mảng mới

    return [...arr1, ...arr2];
    // toán tử spread (...) được sử dụng để "trải" các phần tử của mảng arr1 và arr2 vào trong một mảng mới.
    // let mergedArray = [];
    // for (let i = 0; i < arr1.length; i++) {
    //     mergedArray.push(arr1[i]);
    // }
    // for (let j = 0; j < arr2.length; j++) {
    //     mergedArray.push(arr2[j]);
    // }
    // return mergedArray;
    
    //return arr1.concat(arr2);
    //concat(): Phương thức này được sử dụng để nối hai hoặc nhiều mảng lại với nhau và trả về một mảng mới.
}

// ===== TEST =====
console.log("=== Bài 22: Merge arrays ===");
console.log("mergeArrays([1, 2], [3, 4]) =", mergeArrays([1, 2], [3, 4])); 
// Kỳ vọng: [1, 2, 3, 4]
console.log("mergeArrays(['a'], ['b', 'c']) =", mergeArrays(['a'], ['b', 'c'])); 
// Kỳ vọng: ['a', 'b', 'c']
