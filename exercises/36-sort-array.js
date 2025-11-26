/**
 * BÀI 36: Sort array số tăng/giảm
 * Yêu cầu: Viết hàm sắp xếp mảng
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function sortAscending(arr) {
    // TODO: Sắp xếp mảng tăng dần (không thay đổi mảng gốc)
    return [...arr].sort((a, b) => a - b);
    ///[...arr] tạo một bản sao của mảng ban đầu để tránh thay đổi mảng gốc.
    //sort((a, b) => a - b) sắp xếp các phần tử trong mảng theo thứ tự tăng dần.

}

function sortDescending(arr) {
    // TODO: Sắp xếp mảng giảm dần (không thay đổi mảng gốc)
    return [...arr].sort((a, b) => b - a);
}

// ===== TEST =====
console.log("=== Bài 36: Sort array ===");
const nums = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original:", nums);
console.log("sortAscending =", sortAscending(nums)); 
// Kỳ vọng: [1, 1, 2, 3, 4, 5, 6, 9]
console.log("sortDescending =", sortDescending(nums)); 
// Kỳ vọng: [9, 6, 5, 4, 3, 2, 1, 1]
console.log("Original unchanged:", nums); // Mảng gốc không đổi
