/**
 * BÀI 33: Reduce array tính tổng
 * Yêu cầu: Viết hàm tính tổng bằng reduce
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function sumWithReduce(arr) {
    // TODO: Dùng reduce để tính tổng mảng
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //reduce là một phương thức của mảng trong JavaScript, được sử dụng để giảm mảng thành một giá trị duy nhất bằng cách áp dụng một hàm cộng dồn (accumulator function) cho từng phần tử của mảng.
}

// ===== TEST =====
console.log("=== Bài 33: Sum với reduce ===");
console.log("sumWithReduce([1, 2, 3, 4, 5]) =", sumWithReduce([1, 2, 3, 4, 5])); 
// Kỳ vọng: 15
console.log("sumWithReduce([10, 20, 30]) =", sumWithReduce([10, 20, 30])); 
// Kỳ vọng: 60
console.log("sumWithReduce([]) =", sumWithReduce([])); 
// Kỳ vọng: 0
