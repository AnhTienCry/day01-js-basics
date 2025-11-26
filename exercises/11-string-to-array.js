/**
 * BÀI 11: Chuyển string → array ký tự
 * Yêu cầu: Viết hàm chuyển chuỗi thành mảng các ký tự
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function stringToArray(str) {
    // TODO: Chuyển string thành array ký tự
    return str.split('');
}

// ===== TEST =====
console.log("=== Bài 11: String → Array ===");
console.log("stringToArray('hello') =", stringToArray('hello')); 
// Kỳ vọng: ['h', 'e', 'l', 'l', 'o']
console.log("stringToArray('JS') =", stringToArray('JS')); 
// Kỳ vọng: ['J', 'S']
