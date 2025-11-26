/**
 * BÀI 2: Kiểm tra số chẵn/lẻ
 * Yêu cầu: Viết hàm kiểm tra số chẵn hay lẻ
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function isEven(n) {
    // TODO: Trả về true nếu n chẵn, false nếu n lẻ
    //cach 1
    // if(n%2==0){
    //     return true;
    // }
    // return false;

    //cach 2
    return n%2===0;
}

// ===== TEST =====
console.log("=== Bài 2: Kiểm tra chẵn/lẻ ===");
console.log("isEven(4) =", isEven(4)); // Kỳ vọng: true
console.log("isEven(7) =", isEven(7)); // Kỳ vọng: false
console.log("isEven(0) =", isEven(0)); // Kỳ vọng: true
