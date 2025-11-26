/**
 * BÀI 23: Flatten array 2 chiều
 * Yêu cầu: Viết hàm làm phẳng mảng 2 chiều thành 1 chiều
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function flatten(arr) {
    // TODO: Làm phẳng mảng 2 chiều
    // Ví dụ: [[1, 2], [3, 4]] → [1, 2, 3, 4]
    // let flatArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         flatArr.push(arr[i][j]);
    //     }
    // }
    // return flatArr;
    return arr.flat();
    
}

// ===== TEST =====
console.log("=== Bài 23: Flatten array ===");
console.log("flatten([[1, 2], [3, 4]]) =", flatten([[1, 2], [3, 4]])); 
// Kỳ vọng: [1, 2, 3, 4]
console.log("flatten([[1], [2, 3], [4, 5, 6]]) =", flatten([[1], [2, 3], [4, 5, 6]])); 
// Kỳ vọng: [1, 2, 3, 4, 5, 6]
