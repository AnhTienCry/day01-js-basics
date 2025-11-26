/**
 * BÀI 30: Tìm longest string trong array
 * Yêu cầu: Viết hàm tìm chuỗi dài nhất
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function findLongestString(arr) {
    // TODO: Tìm và trả về chuỗi dài nhất trong mảng
    let longestStr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestStr.length) {
            longestStr = arr[i];
        }
    }
    return longestStr;
}

// ===== TEST =====
console.log("=== Bài 30: Longest string ===");
console.log("findLongestString(['cat', 'elephant', 'dog']) =", 
    findLongestString(['cat', 'elephant', 'dog'])); 
// Kỳ vọng: "elephant"
console.log("findLongestString(['a', 'bb', 'ccc']) =", 
    findLongestString(['a', 'bb', 'ccc'])); 
// Kỳ vọng: "ccc"
