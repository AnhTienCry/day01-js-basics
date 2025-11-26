/**
 * BÀI 31: Filter array số lẻ
 * Yêu cầu: Viết hàm lọc ra các số lẻ trong mảng
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function filterOdd(arr) {
    // TODO: Trả về mảng mới chỉ chứa số lẻ
    // let oddNumbers = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 !== 0) {
    //         oddNumbers.push(arr[i]);
    //     }
    // }
    // return oddNumbers;
    return arr.filter(n => n % 2 !== 0);
    // Sử dụng phương thức filter để lọc số lẻ
}

// ===== TEST =====
console.log("=== Bài 31: Filter số lẻ ===");
console.log("filterOdd([1, 2, 3, 4, 5, 6]) =", filterOdd([1, 2, 3, 4, 5, 6])); 
// Kỳ vọng: [1, 3, 5]
console.log("filterOdd([2, 4, 6]) =", filterOdd([2, 4, 6])); 
// Kỳ vọng: []
