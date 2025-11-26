/**
 * BÀI 35: Some / Every trên array
 * Yêu cầu: Viết hàm kiểm tra mảng với some và every
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function hasNegative(arr) {
    // TODO: Dùng some - kiểm tra có số âm nào không
    return arr.some(n => n < 0);
    //some(): Phương thức này được sử dụng để kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn một điều kiện nào đó hay không.
}

function allPositive(arr) {
    // TODO: Dùng every - kiểm tra tất cả đều dương
    return arr.every(n => n > 0);
    //every(): Phương thức này được sử dụng để kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện nào đó hay không.   
}

// ===== TEST =====
console.log("=== Bài 35: Some / Every ===");
console.log("hasNegative([1, -2, 3]) =", hasNegative([1, -2, 3])); // Kỳ vọng: true
console.log("hasNegative([1, 2, 3]) =", hasNegative([1, 2, 3])); // Kỳ vọng: false
console.log("allPositive([1, 2, 3]) =", allPositive([1, 2, 3])); // Kỳ vọng: true
console.log("allPositive([1, -2, 3]) =", allPositive([1, -2, 3])); // Kỳ vọng: false
