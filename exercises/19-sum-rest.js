/**
 * BÀI 19: Hàm sum với rest parameters
 * Yêu cầu: Viết hàm tính tổng nhận nhiều tham số
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function sum(...args) {
    // TODO: Tính tổng tất cả các tham số truyền vào
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// ===== TEST =====
console.log("=== Bài 19: Sum với rest params ===");
console.log("sum(1, 2, 3) =", sum(1, 2, 3)); // Kỳ vọng: 6
console.log("sum(10, 20) =", sum(10, 20)); // Kỳ vọng: 30
console.log("sum(1, 2, 3, 4, 5) =", sum(1, 2, 3, 4, 5)); // Kỳ vọng: 15
console.log("sum() =", sum()); // Kỳ vọng: 0
