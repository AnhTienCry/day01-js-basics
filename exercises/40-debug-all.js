/**
 * BÀI 40: Debug tổng hợp
 * Yêu cầu: Sửa TẤT CẢ các lỗi trong file này
 */

// ===== LỖI 1: Logic error =====
function getGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else {
        return 'F';
    }
}
// BUG: score = 90 nên là A, không phải B
// TODO: Sửa lại các điều kiện

console.log("=== Debug 1: getGrade ===");
console.log("getGrade(90) =", getGrade(90)); // Kỳ vọng: 'A'
console.log("getGrade(80) =", getGrade(80)); // Kỳ vọng: 'B'


// ===== LỖI 2: Reference error =====
function calculateTax(price) {
    let taxRate = 0.1; // BUG: biến không khai báo
    return price * taxRate;
}
// TODO: Khai báo biến đúng cách

console.log("=== Debug 2: calculateTax ===");
console.log("calculateTax(100) =", calculateTax(100)); // Kỳ vọng: 10


// ===== LỖI 3: Array method wrong usage =====
function getFirstThree(arr) {
    // return arr.slice(0, 3); // Slice trả về 3 phần tử đầu
    return arr.splice(0, 3); // BUG: splice thay đổi mảng gốc

}
// Hàm này đúng rồi, nhưng thử debug nếu dùng splice

console.log("=== Debug 3: getFirstThree ===");
console.log("getFirstThree([1,2,3,4,5]) =", getFirstThree([1,2,3,4,5])); // Kỳ vọng: [1,2,3]


// ===== LỖI 4: Type coercion =====
function isEqual(a, b) {
    return a === b; // BUG: dùng == thay vì ===
}
// TODO: Dùng === để so sánh nghiêm ngặt

console.log("=== Debug 4: isEqual ===");
console.log("isEqual(5, '5') =", isEqual(5, '5')); // Kỳ vọng: false (nếu dùng ===)


// ===== LỖI 5: Off-by-one error =====
function getLastElement(arr) {
    // return arr[arr.length]; // BUG: length không phải index cuối
    return arr[arr.length - 1];
}
// TODO: Sửa để lấy đúng phần tử cuối

console.log("=== Debug 5: getLastElement ===");
console.log("getLastElement([1,2,3]) =", getLastElement([1,2,3])); // Kỳ vọng: 3


// ===== LỖI 6: Không return trong loop =====
function findNumber(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Tìm thấy trả về index
        }
    }
    return -1;
    // BUG: Thiếu return -1 khi không tìm thấy
}

// TODO: Thêm return khi không tìm thấy

console.log("=== Debug 6: findNumber ===");
console.log("findNumber([1,2,3], 2) =", findNumber([1,2,3], 2)); // Kỳ vọng: 1
console.log("findNumber([1,2,3], 5) =", findNumber([1,2,3], 5)); // Kỳ vọng: -1
