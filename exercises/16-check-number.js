/**
 * BÀI 16: Kiểm tra số âm/dương
 * Yêu cầu: Viết hàm kiểm tra số âm, dương, hoặc bằng 0
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function checkNumber(n) {
    // TODO: Trả về "positive", "negative", hoặc "zero"
    if(n>0){
        return "positive";
    } else if(n<0){
        return "negative";
    } else {
        return "zero";
    }
}

// ===== TEST =====
console.log("=== Bài 16: Kiểm tra số ===");
console.log("checkNumber(5) =", checkNumber(5)); // Kỳ vọng: "positive"
console.log("checkNumber(-3) =", checkNumber(-3)); // Kỳ vọng: "negative"
console.log("checkNumber(0) =", checkNumber(0)); // Kỳ vọng: "zero"
