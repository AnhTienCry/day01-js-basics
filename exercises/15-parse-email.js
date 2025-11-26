/**
 * BÀI 15: Tách email username & domain
 * Yêu cầu: Viết hàm tách email thành username và domain
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function parseEmail(email) {
    // TODO: Trả về object {username, domain}
    // Ví dụ: "john@gmail.com" → {username: "john", domain: "gmail.com"}
    const atIndex = email.indexOf('@');
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex + 1);
    return {username, domain};

    indexOf('@') // tìm vị trí của ký tự @ trong chuỗi email
    slice(0, atIndex) // lấy phần chuỗi từ đầu đến vị trí @ (không bao gồm @)
    slice(atIndex + 1) // lấy phần chuỗi từ sau @ đến cuối chuỗi
}

// ===== TEST =====
console.log("=== Bài 15: Tách email ===");
console.log("parseEmail('john@gmail.com') =", parseEmail('john@gmail.com')); 
// Kỳ vọng: {username: "john", domain: "gmail.com"}
console.log("parseEmail('user.name@company.co.uk') =", parseEmail('user.name@company.co.uk')); 
// Kỳ vọng: {username: "user.name", domain: "company.co.uk"}
