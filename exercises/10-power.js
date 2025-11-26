/**
 * BÀI 10: Lũy thừa x^y
 * Yêu cầu: Viết hàm tính x mũ y (không dùng Math.pow hoặc **)
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function power(x, y) {
    // TODO: Tính x^y bằng vòng lặp
    let result = 1;
    for(let i=0;i<y;i++){
        result *= x;
    }
    return result;
}

// ===== TEST =====
console.log("=== Bài 10: Lũy thừa ===");
console.log("power(2, 3) =", power(2, 3)); // Kỳ vọng: 8
console.log("power(5, 2) =", power(5, 2)); // Kỳ vọng: 25
console.log("power(10, 0) =", power(10, 0)); // Kỳ vọng: 1
console.log("power(3, 4) =", power(3, 4)); // Kỳ vọng: 81
