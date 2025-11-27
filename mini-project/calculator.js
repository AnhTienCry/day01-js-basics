/**
 * MINI PROJECT: Console Calculator
 * Yêu cầu: Xây dựng máy tính với các chức năng:
 * - Cộng, trừ, nhân, chia, chia lấy dư (%), lũy thừa (**)
 * 
 * Bạn cần hoàn thành các hàm bên dưới
 */

// ===== CÁC HÀM TÍNH TOÁN =====

function add(a, b) {
    // TODO: Cộng 2 số
    return a + b;
}

function subtract(a, b) {
    // TODO: Trừ 2 số
    return a - b;
}

function multiply(a, b) {
    // TODO: Nhân 2 số
    return a * b;
}

function divide(a, b) {
    // TODO: Chia 2 số (xử lý chia cho 0)
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function modulo(a, b) {
    // TODO: Chia lấy dư
    return a % b;
}   

function power(a, b) {
    // TODO: Lũy thừa a^b
    return a ** b;
}

// ===== HÀM CALCULATOR CHÍNH =====
function calculate(a, operator, b) {
    // TODO: Dựa vào operator, gọi hàm tương ứng
    // operator: '+', '-', '*', '/', '%', '**'
    // Trả về kết quả hoặc "Invalid operator" nếu operator không hợp lệ
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '%':
            return modulo(a, b);
        case '**':
            return power(a, b);
        default:
            return "Invalid operator";
    }
}

// ===== TEST CALCULATOR =====
console.log("========================================");
console.log("       CONSOLE CALCULATOR TEST         ");
console.log("========================================");

// Test cộng
console.log("\n--- CỘNG ---");
console.log("10 + 5 =", calculate(10, '+', 5)); // Kỳ vọng: 15

// Test trừ
console.log("\n--- TRỪ ---");
console.log("10 - 5 =", calculate(10, '-', 5)); // Kỳ vọng: 5

// Test nhân
console.log("\n--- NHÂN ---");
console.log("10 * 5 =", calculate(10, '*', 5)); // Kỳ vọng: 50

// Test chia
console.log("\n--- CHIA ---");
console.log("10 / 5 =", calculate(10, '/', 5)); // Kỳ vọng: 2
console.log("10 / 0 =", calculate(10, '/', 0)); // Kỳ vọng: Error message

// Test chia lấy dư
console.log("\n--- CHIA LẤY DƯ ---");
console.log("10 % 3 =", calculate(10, '%', 3)); // Kỳ vọng: 1

// Test lũy thừa
console.log("\n--- LŨY THỪA ---");
console.log("2 ** 10 =", calculate(2, '**', 10)); // Kỳ vọng: 1024

// Test invalid operator
console.log("\n--- INVALID ---");
console.log("10 ^ 5 =", calculate(10, '^', 5)); // Kỳ vọng: "Invalid operator"

console.log("\n========================================");
console.log("        TEST HOÀN TẤT!                 ");
console.log("========================================");


// ===== BONUS: Interactive Calculator =====
// Nếu bạn muốn thử chế độ tương tác, uncomment code dưới đây
// và chạy: node mini-project/calculator.js

/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {
    rl.question('\nNhập phép tính (VD: 10 + 5) hoặc "exit" để thoát: ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Goodbye!');
            rl.close();
            return;
        }
        
        const parts = input.split(' ');
        if (parts.length !== 3) {
            console.log('Sai format! Vui lòng nhập: số operator số');
        } else {
            const a = parseFloat(parts[0]);
            const op = parts[1];
            const b = parseFloat(parts[2]);
            console.log(`Kết quả: ${calculate(a, op, b)}`);
        }
        askQuestion();
    });
}

console.log('\n=== INTERACTIVE CALCULATOR ===');
askQuestion();
*/
