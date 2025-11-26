/**
 * BÀI 38: Tách words trong sentence thành array
 * Yêu cầu: Viết hàm tách câu thành mảng các từ
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function splitWords(sentence) {
    // TODO: Tách câu thành mảng từ
    return sentence.split(' ');
    // split(' ') chia chuỗi thành mảng các từ dựa trên dấu cách.
}

// ===== TEST =====
console.log("=== Bài 38: Split words ===");
console.log("splitWords('Hello World') =", splitWords('Hello World')); 
// Kỳ vọng: ['Hello', 'World']
console.log("splitWords('JavaScript is awesome') =", splitWords('JavaScript is awesome')); 
// Kỳ vọng: ['JavaScript', 'is', 'awesome']
