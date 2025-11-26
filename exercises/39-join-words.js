/**
 * BÀI 39: Join array thành sentence
 * Yêu cầu: Viết hàm nối mảng thành câu
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function joinWords(arr) {
    // TODO: Nối mảng từ thành câu với dấu cách
    return arr.join(' ');
    // join(' ') nối các phần tử trong mảng thành một chuỗi, ngăn cách bởi dấu cách.
}

// ===== TEST =====
console.log("=== Bài 39: Join words ===");
console.log("joinWords(['Hello', 'World']) =", joinWords(['Hello', 'World'])); 
// Kỳ vọng: "Hello World"
console.log("joinWords(['JavaScript', 'is', 'fun']) =", joinWords(['JavaScript', 'is', 'fun'])); 
// Kỳ vọng: "JavaScript is fun"
