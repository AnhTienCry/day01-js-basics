/**
 * BÀI 25-28: Debug lỗi cơ bản
 * Yêu cầu: Sửa các lỗi trong code bên dưới
 */

// ===== BÀI 25: Debug lỗi "undefined" =====
// Lỗi: Biến chưa được khai báo đúng cách
function getFullName() {
    let  firstName = "John"; // BUG: Thiếu let/const
    let lastName = "Doe";   // BUG: Thiếu let/const
    return firstName + " " + lastName;
}
// TODO: Sửa hàm trên

console.log("=== Bài 25: Fix undefined ===");
console.log("getFullName() =", getFullName());


// ===== BÀI 26: Debug lỗi type mismatch =====
// Lỗi: Cộng số với string
function addNumbers(a, b) {
    return Number(a) + Number(b); // Nếu a hoặc b là string sẽ thành nối chuỗi
    
}
// TODO: Đảm bảo luôn trả về số

console.log("=== Bài 26: Fix type mismatch ===");
console.log("addNumbers('5', 10) =", addNumbers('5', 10)); // Kỳ vọng: 15, không phải "510"


// ===== BÀI 27: Debug syntax error =====
// Lỗi: Thiếu dấu ngoặc
function calculateArea(width, height) {
    if (width > 0 && height > 0) {
        return width * height
    }// BUG: Thiếu dấu } đóng if
    return 0;
}
// TODO: Sửa hàm trên

console.log("=== Bài 27: Fix syntax error ===");
console.log("calculateArea(5, 10) =", calculateArea(5, 10)); // Uncomment sau khi sửa


// ===== BÀI 28: Debug console.log unexpected output =====
// Lỗi: Logic sai
function isAdult(age) {
    if (age >= 18) { // BUG: Nên là >= 18
        return true;
    }
    return false;
}
// TODO: Sửa để 18 tuổi cũng là người lớn

console.log("=== Bài 28: Fix logic error ===");
console.log("isAdult(18) =", isAdult(18)); // Kỳ vọng: true
console.log("isAdult(17) =", isAdult(17)); // Kỳ vọng: false
