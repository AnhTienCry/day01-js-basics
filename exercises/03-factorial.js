/**
 * BÀI 3: Tính giai thừa n
 * Yêu cầu: Viết hàm tính n! (n giai thừa)
 * Gợi ý: n! = n * (n-1) * (n-2) * ... * 1
 * Ví dụ: 5! = 5 * 4 * 3 * 2 * 1 = 120
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function factorial(n) {
    // TODO: Tính giai thừa của n bằng vòng lặp
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

// ===== TEST =====
console.log("=== Bài 3: Giai thừa ===");
console.log("factorial(5) =", factorial(5)); // Kỳ vọng: 120
console.log("factorial(0) =", factorial(0)); // Kỳ vọng: 1
console.log("factorial(1) =", factorial(1)); // Kỳ vọng: 1
console.log("factorial(10) =", factorial(10)); // Kỳ vọng: 3628800
