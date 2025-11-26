/**
 * BÀI 9: Kiểm tra số nguyên tố
 * Yêu cầu: Viết hàm kiểm tra số n có phải số nguyên tố không
 * Số nguyên tố: chỉ chia hết cho 1 và chính nó (n > 1)
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function isPrime(n) {
    // TODO: Trả về true nếu n là số nguyên tố
    if(n<2) return false;
    
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

// ===== TEST =====
console.log("=== Bài 9: Số nguyên tố ===");
console.log("isPrime(2) =", isPrime(2)); // Kỳ vọng: true
console.log("isPrime(7) =", isPrime(7)); // Kỳ vọng: true
console.log("isPrime(10) =", isPrime(10)); // Kỳ vọng: false
console.log("isPrime(1) =", isPrime(1)); // Kỳ vọng: false
console.log("isPrime(17) =", isPrime(17)); // Kỳ vọng: true
