/**
 * BÀI 34: Find object trong array theo key
 * Yêu cầu: Viết hàm tìm object theo id
 */

// ===== CODE CỦA BẠN Ở ĐÂY =====
function findById(arr, id) {
    // TODO: Tìm object có id tương ứng trong mảng
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return arr[i];
        }
    }
    return undefined;
}

// ===== TEST =====
console.log("=== Bài 34: Find by ID ===");
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
console.log("findById(users, 2) =", findById(users, 2)); 
// Kỳ vọng: { id: 2, name: "Bob" }
console.log("findById(users, 5) =", findById(users, 5)); 
// Kỳ vọng: undefined
