/**
 * BÀI 14: Kiểm tra string bắt đầu/kết thúc bằng chữ cái
 * Yêu cầu: Viết 2 hàm kiểm tra
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function startsWithLetter(str) {
    // TODO: Kiểm tra str bắt đầu bằng chữ cái (a-z, A-Z)
    const firstChar = str.charAt(0);
    return (firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z');
}

function endsWithLetter(str) {
    // TODO: Kiểm tra str kết thúc bằng chữ cái
    const lastChar = str.charAt(str.length - 1);
    return (lastChar >= 'A' && lastChar <= 'Z') || (lastChar >= 'a' && lastChar <= 'z');
}

// ===== TEST =====
console.log("=== Bài 14: Kiểm tra chữ cái đầu/cuối ===");
console.log("startsWithLetter('Hello') =", startsWithLetter('Hello')); // true
console.log("startsWithLetter('123abc') =", startsWithLetter('123abc')); // false
console.log("endsWithLetter('Hello') =", endsWithLetter('Hello')); // true
console.log("endsWithLetter('Hello123') =", endsWithLetter('Hello123')); // false
