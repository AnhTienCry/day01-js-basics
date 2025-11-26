/**
 * BÀI 7: Tính trung bình cộng mảng
 * Yêu cầu: Viết hàm tính trung bình cộng các phần tử trong mảng
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function average(arr) {
    // TODO: Tính trung bình cộng của mảng
    let sum = arr[0];
    for(let i=1;i<arr.length;i++){
        sum += arr[i];
    }
    return sum / arr.length;
}   

// ===== TEST =====
console.log("=== Bài 7: Trung bình cộng ===");
console.log("average([5, 10, 15, 20]) =", average([5, 10, 15, 20])); // Kỳ vọng: 12.5
console.log("average([10, 20, 30]) =", average([10, 20, 30])); // Kỳ vọng: 20
console.log("average([100]) =", average([100])); // Kỳ vọng: 100
