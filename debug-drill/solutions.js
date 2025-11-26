/**
 * DEBUG DRILL - ĐÁP ÁN
 * So sánh với file bugs-to-fix.js để xem cách sửa
 */

// ===== BUG 1: FIXED - Thêm dấu ) =====
function calculateSum(arr) { // ← Thêm )
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("Bug 1 FIXED - calculateSum([1,2,3]):", calculateSum([1,2,3])); // 6


// ===== BUG 2: FIXED - Thêm n-- =====
function countdown(n) {
    let result = [];
    while (n > 0) {
        result.push(n);
        n--; // ← Thêm dòng này
    }
    return result;
}

console.log("Bug 2 FIXED - countdown(5):", countdown(5)); // [5,4,3,2,1]


// ===== BUG 3: FIXED - Sửa index =====
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { // ← i = 0 và i < length
        sum += arr[i];
    }
    return sum;
}

console.log("Bug 3 FIXED - sumArray([10,20,30]):", sumArray([10,20,30])); // 60


// ===== BUG 4: FIXED - Convert to number =====
function addPrices(price1, price2) {
    return Number(price1) + Number(price2); // ← Convert sang number
}

console.log("Bug 4 FIXED - addPrices('100', '50'):", addPrices('100', '50')); // 150


// ===== BUG 5: FIXED - Khai báo biến trước =====
function getDiscount(price, percentage) {
    let discount = 0; // ← Khai báo và khởi tạo trước
    if (percentage > 0) {
        discount = price * percentage / 100;
    }
    return price - discount;
}

console.log("Bug 5 FIXED - getDiscount(100, 0):", getDiscount(100, 0)); // 100


console.log("\n========================================");
console.log("       TẤT CẢ BUG ĐÃ ĐƯỢC SỬA!        ");
console.log("========================================");
