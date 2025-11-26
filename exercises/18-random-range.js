/**
 * BÀI 18: Random number trong range
 * Yêu cầu: Viết hàm tạo số ngẫu nhiên trong khoảng [min, max]
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function randomInRange(min, max) {
    // TODO: Trả về số nguyên ngẫu nhiên từ min đến max (bao gồm cả 2 đầu)
    // Gợi ý: Math.floor(Math.random() * ...) + ...
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // floor: Hàm làm tròn xuống số nguyên gần nhất
    // random: Hàm tạo số thập phân ngẫu nhiên từ 0 (bao gồm) đến 1 (không bao gồm)
}

// ===== TEST =====
console.log("=== Bài 18: Random trong range ===");
console.log("randomInRange(1, 10) =", randomInRange(1, 10)); // Số từ 1-10
console.log("randomInRange(1, 10) =", randomInRange(1, 10)); // Số từ 1-10
console.log("randomInRange(50, 100) =", randomInRange(50, 100)); // Số từ 50-100
