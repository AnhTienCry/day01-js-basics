/**
 * BÀI 32: Map array nhân đôi giá trị
 * Yêu cầu: Viết hàm nhân đôi tất cả phần tử trong mảng
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function doubleArray(arr) {
    // TODO: Trả về mảng mới với mỗi phần tử nhân 2
    // let doubledArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     doubledArr.push(arr[i] * 2);
    // }
    // return doubledArr;
    return arr.map(n => n * 2);
    // Sử dụng phương thức map để nhân đôi mỗi phần tử
    //map(): Phương thức này được sử dụng để tạo một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử của mảng ban đầu.
}

// ===== TEST =====
console.log("=== Bài 32: Double array ===");
console.log("doubleArray([1, 2, 3]) =", doubleArray([1, 2, 3])); 
// Kỳ vọng: [2, 4, 6]
console.log("doubleArray([5, 10, 15]) =", doubleArray([5, 10, 15])); 
// Kỳ vọng: [10, 20, 30]
