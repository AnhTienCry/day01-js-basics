/**
 * BÀI 4: Kiểm tra palindrome của chuỗi
 * Yêu cầu: Viết hàm kiểm tra chuỗi có phải palindrome không
 * Palindrome: đọc xuôi = đọc ngược (ví dụ: "level", "radar")
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function isPalindrome(str) {
    // TODO: Trả về true nếu str là palindrome
    const reversed = str.split('').reverse().join('');
    // split('') biến chuỗi thành mảng ký tự
    // reverse() đảo ngược mảng
    // join('') nối mảng thành chuỗi
    return str === reversed;
}

// ===== TEST =====
console.log("=== Bài 4: Palindrome ===");
console.log("isPalindrome('level') =", isPalindrome('level')); // Kỳ vọng: true
console.log("isPalindrome('radar') =", isPalindrome('radar')); // Kỳ vọng: true
console.log("isPalindrome('hello') =", isPalindrome('hello')); // Kỳ vọng: false
console.log("isPalindrome('a') =", isPalindrome('a')); // Kỳ vọng: true
