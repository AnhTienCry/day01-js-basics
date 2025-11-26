/**
 * BÀI 24: Clone array/object
 * Yêu cầu: Viết hàm sao chép array và object
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function cloneArray(arr) {
    // TODO: Tạo bản sao của mảng (shallow copy)
    return arr.slice();
    // slice() trả về một bản sao nông (shallow copy) của mảng ban đầu
}

function cloneObject(obj) {
    // TODO: Tạo bản sao của object (shallow copy)
}

// ===== TEST =====
console.log("=== Bài 24: Clone array/object ===");
const originalArr = [1, 2, 3];
const clonedArr = cloneArray(originalArr);
console.log("clonedArr =", clonedArr);
console.log("originalArr === clonedArr:", originalArr === clonedArr); // Kỳ vọng: false

const originalObj = {a: 1, b: 2};
const clonedObj = cloneObject(originalObj);
console.log("clonedObj =", clonedObj);
console.log("originalObj === clonedObj:", originalObj === clonedObj); // Kỳ vọng: false
