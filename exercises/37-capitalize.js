/**
 * BÀI 37: Capitalize first letter
 * Yêu cầu: Viết hàm viết hoa chữ cái đầu
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function capitalizeFirst(str) {
    // TODO: Viết hoa chữ cái đầu tiên
    // Ví dụ: "hello" → "Hello"
    if (str.length === 0) {
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
    // str.charAt(0).toUpperCase() lấy chữ cái đầu tiên và viết hoa nó.
    // str.slice(1) lấy phần còn lại của chuỗi từ vị trí thứ nhất trở đi.
    // Nối hai phần lại với nhau để tạo thành chuỗi mới với chữ cái đầu tiên được viết hoa.
}

// ===== TEST =====
console.log("=== Bài 37: Capitalize ===");
console.log("capitalizeFirst('hello') =", capitalizeFirst('hello')); // Kỳ vọng: "Hello"
console.log("capitalizeFirst('javaScript') =", capitalizeFirst('javaScript')); // Kỳ vọng: "JavaScript"
console.log("capitalizeFirst('') =", capitalizeFirst('')); // Kỳ vọng: ""
