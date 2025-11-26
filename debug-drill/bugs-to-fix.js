/**
 * DEBUG DRILL - Ngày 1
 * Yêu cầu: Sửa 5 lỗi logic + syntax trong file này
 * 
 * Mỗi hàm đều có BUG - hãy tìm và sửa chúng!
 */

// ===== BUG 1: Syntax Error =====
// Lỗi: Thiếu dấu đóng ngoặc
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("Bug 1 - calculateSum([1,2,3]):", calculateSum([1,2,3])); // Kỳ vọng: 6


// ===== BUG 2: Logic Error - Infinite Loop =====
// Lỗi: Vòng lặp vô hạn
function countdown(n) {
    let result = [];
    while (n > 0) {
        result.push(n);
        // BUG: Thiếu n--
        n--;
    }
    return result;
}

// CẢNH BÁO: Không chạy hàm này cho đến khi sửa bug!
console.log("Bug 2 - countdown(5):", countdown(5)); // Kỳ vọng: [5,4,3,2,1]


// ===== BUG 3: Off-by-one Error =====
// Lỗi: Sai index
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { // BUG: Bắt đầu từ 1 và dùng <=
        sum += arr[i];
        
    }
    return sum;
}

console.log("Bug 3 - sumArray([10,20,30]):", sumArray([10,20,30])); // Kỳ vọng: 60


// ===== BUG 4: Type Error =====
// Lỗi: Concatenate thay vì add
function addPrices(price1, price2) {
    return Number(price1) + Number(price2)  ; // BUG nếu input là string
}

console.log("Bug 4 - addPrices('100', '50'):", addPrices('100', '50')); // Kỳ vọng: 150


// ===== BUG 5: Scope Error =====
// Lỗi: Biến không truy cập được
function getDiscount(price, percentage) {
    if (percentage > 0) {
        var discount = price * percentage / 100;
    }
    return price - (discount || 0); // BUG: discount có thể undefined
    
}

console.log("Bug 5 - getDiscount(100, 0):", getDiscount(100, 0)); // Kỳ vọng: 100


console.log("\n========================================");
console.log(" SỬA TẤT CẢ BUG VÀ CHẠY LẠI FILE NÀY! ");
console.log("========================================");
