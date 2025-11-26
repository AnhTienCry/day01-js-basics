/**
 * BÀI 8: Loại bỏ phần tử trùng lặp trong mảng
 * Yêu cầu: Viết hàm loại bỏ các phần tử trùng lặp
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function removeDuplicates(arr) {
    // TODO: Trả về mảng mới không có phần tử trùng
    // Gợi ý: Có thể dùng Set hoặc filter
    // let uniqueArr = [];
    // for (let i=0; i < arr.length; i++){
    //     if(!uniqueArr.includes(arr[i])){
    //         uniqueArr.push(arr[i]);
    //     }
    // }
    // return uniqueArr;

    return [...new Set(arr)];
}

// ===== TEST =====
console.log("=== Bài 8: Loại bỏ trùng lặp ===");
console.log("removeDuplicates([1, 2, 2, 3, 3, 3]) =", removeDuplicates([1, 2, 2, 3, 3, 3])); 
// Kỳ vọng: [1, 2, 3]
console.log("removeDuplicates(['a', 'b', 'a', 'c']) =", removeDuplicates(['a', 'b', 'a', 'c'])); 
// Kỳ vọng: ['a', 'b', 'c']
