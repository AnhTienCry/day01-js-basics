/**
 * BÀI 6: Tìm max/min trong array
 * Yêu cầu: Viết hàm tìm số lớn nhất và nhỏ nhất trong mảng
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function findMax(arr) {
    // TODO: Tìm số lớn nhất trong mảng
//    let max = arr[0];
//    for (let i=0;i<arr.length;i++){
//          if(arr[i]>max){
//             max = arr[i];
//          }
//     }
//     return max;

    return Math.max(...arr);
}

function findMin(arr) {
    // TODO: Tìm số nhỏ nhất trong mảng
    // let min = arr[0];
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]<min){
    //         min=arr[i];
    //     }
    // }
    // return min;

    return Math.min(...arr);
}

// ===== TEST =====
console.log("=== Bài 6: Max/Min ===");
const numbers = [4, 7, 1, 9, 3];
console.log("findMax([4, 7, 1, 9, 3]) =", findMax(numbers)); // Kỳ vọng: 9
console.log("findMin([4, 7, 1, 9, 3]) =", findMin(numbers)); // Kỳ vọng: 1
console.log("findMax([5]) =", findMax([5])); // Kỳ vọng: 5
