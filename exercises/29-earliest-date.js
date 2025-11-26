/**
 * BÀI 29: Tìm earliest date trong array
 * Yêu cầu: Viết hàm tìm ngày sớm nhất
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function findEarliestDate(dates) {
    // TODO: Tìm và trả về Date sớm nhất trong mảng
    // dates là mảng các Date objects hoặc date strings
    let earliestDate = dates[0];
    for (let i = 1; i < dates.length; i++) {
        if (new Date(dates[i]) < new Date(earliestDate)) {
            earliestDate = dates[i];
        }
    }
    return earliestDate;
}

// ===== TEST =====
console.log("=== Bài 29: Earliest date ===");
const dates = [
    new Date('2025-12-01'),
    new Date('2025-01-15'),
    new Date('2025-06-20')
];
console.log("findEarliestDate(dates) =", findEarliestDate(dates)); 
// Kỳ vọng: Date "2025-01-15"
