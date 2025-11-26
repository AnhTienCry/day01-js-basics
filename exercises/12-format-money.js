/**
 * BÀI 12: Format tiền tệ
 * Yêu cầu: Viết hàm format số thành dạng tiền tệ
 * Ví dụ: 1000000 → "1,000,000"
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function formatMoney(num) {
    // TODO: Format số thành dạng có dấu phẩy ngăn cách hàng nghìn
    // Gợi ý: Có thể dùng toLocaleString() hoặc tự viết logic
    
    // toLocaleString là hàm có sẵn trong JS để định dạng số theo kiểu tiền tệ

    return num.toLocaleString();
}

// ===== TEST =====
console.log("=== Bài 12: Format tiền ===");
console.log("formatMoney(1000000) =", formatMoney(1000000)); // Kỳ vọng: "1,000,000"
console.log("formatMoney(50000) =", formatMoney(50000)); // Kỳ vọng: "50,000"
console.log("formatMoney(999) =", formatMoney(999)); // Kỳ vọng: "999"
