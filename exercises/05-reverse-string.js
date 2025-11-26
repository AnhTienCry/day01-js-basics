/**
 * BÀI 5: Đảo chuỗi
 * Yêu cầu: Viết hàm đảo ngược chuỗi
 * Ví dụ: "hello" → "olleh"
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function reverseString(str) {
    // TODO: Đảo ngược chuỗi str
    return str.split('').reverse().join('');
}

// ===== TEST =====
console.log("=== Bài 5: Đảo chuỗi ===");
console.log("reverseString('hello') =", reverseString('hello')); // Kỳ vọng: "olleh"
console.log("reverseString('JavaScript') =", reverseString('JavaScript')); // Kỳ vọng: "tpircSavaJ"
console.log("reverseString('') =", reverseString('')); // Kỳ vọng: ""
