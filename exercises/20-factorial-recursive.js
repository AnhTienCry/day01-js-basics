/**
 * BÀI 20: Giai thừa đệ quy (Recursion)
 * Yêu cầu: Viết hàm tính giai thừa bằng đệ quy
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function factorialRecursive(n) {
    // TODO: Tính n! bằng đệ quy
    // Gợi ý: n! = n * (n-1)!
    // Base case: 0! = 1
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
    //factorialRecursive  gọi lại chính nó với n-1


}

// ===== TEST =====
console.log("=== Bài 20: Giai thừa đệ quy ===");
console.log("factorialRecursive(5) =", factorialRecursive(5)); // Kỳ vọng: 120
console.log("factorialRecursive(0) =", factorialRecursive(0)); // Kỳ vọng: 1
console.log("factorialRecursive(7) =", factorialRecursive(7)); // Kỳ vọng: 5040
