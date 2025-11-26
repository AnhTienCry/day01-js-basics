/**
 * BÀI 21: Kiểm tra array rỗng
 * Yêu cầu: Viết hàm kiểm tra mảng có rỗng không
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function isEmpty(arr) {
    // TODO: Trả về true nếu mảng rỗng
    return arr.length === 0;
}

// ===== TEST =====
console.log("=== Bài 21: Array rỗng ===");
console.log("isEmpty([]) =", isEmpty([])); // Kỳ vọng: true
console.log("isEmpty([1, 2, 3]) =", isEmpty([1, 2, 3])); // Kỳ vọng: false
console.log("isEmpty([null]) =", isEmpty([null])); // Kỳ vọng: false
