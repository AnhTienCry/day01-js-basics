/**
 * BÀI 17: Swap 2 biến
 * Yêu cầu: Viết hàm hoán đổi giá trị 2 biến
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function swap(a, b) {
    // TODO: Trả về mảng [b, a] sau khi swap
    // Lưu ý: Trong JS không thể swap biến ngoài hàm trực tiếp
    return [b, a];
}

// ===== TEST =====
console.log("=== Bài 17: Swap 2 biến ===");
let x = 5, y = 10;
console.log("Trước swap: x =", x, ", y =", y);
[x, y] = swap(x, y);
console.log("Sau swap: x =", x, ", y =", y); // Kỳ vọng: x = 10, y = 5
