/**
 * BÀI 13: Đếm ký tự xuất hiện trong string
 * Yêu cầu: Viết hàm đếm số lần xuất hiện của từng ký tự
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function countChars(str) {
    // TODO: Trả về object chứa số lần xuất hiện của từng ký tự
    // Ví dụ: "hello" → {h: 1, e: 1, l: 2, o: 1}
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

// ===== TEST =====
console.log("=== Bài 13: Đếm ký tự ===");
console.log("countChars('hello') =", countChars('hello')); 
// Kỳ vọng: {h: 1, e: 1, l: 2, o: 1}
console.log("countChars('aaa') =", countChars('aaa')); 
// Kỳ vọng: {a: 3}
