/**
 * ĐÁP ÁN BÀI TẬP NGÀY 1
 * 
 * ⚠️ CHÚ Ý: Hãy tự làm bài trước khi xem đáp án!
 * File này dùng để kiểm tra và học hỏi sau khi bạn đã cố gắng tự giải.
 */

// ===== BÀI 1: Tính tổng 2 số =====
function sum(a, b) {
    return a + b;
}

// ===== BÀI 2: Kiểm tra chẵn/lẻ =====
function isEven(n) {
    return n % 2 === 0;
}

// ===== BÀI 3: Giai thừa =====
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// ===== BÀI 4: Palindrome =====
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// ===== BÀI 5: Đảo chuỗi =====
function reverseString(str) {
    return str.split('').reverse().join('');
}

// ===== BÀI 6: Max/Min =====
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// ===== BÀI 7: Trung bình cộng =====
function average(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

// ===== BÀI 8: Loại bỏ trùng lặp =====
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// ===== BÀI 9: Số nguyên tố =====
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// ===== BÀI 10: Lũy thừa =====
function power(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

// ===== BÀI 11: String → Array =====
function stringToArray(str) {
    return str.split('');
}

// ===== BÀI 12: Format tiền =====
function formatMoney(num) {
    return num.toLocaleString('en-US');
}

// ===== BÀI 13: Đếm ký tự =====
function countChars(str) {
    const count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

// ===== BÀI 14: Kiểm tra chữ cái đầu/cuối =====
function startsWithLetter(str) {
    return /^[a-zA-Z]/.test(str);
}

function endsWithLetter(str) {
    return /[a-zA-Z]$/.test(str);
}

// ===== BÀI 15: Tách email =====
function parseEmail(email) {
    const [username, domain] = email.split('@');
    return { username, domain };
}

// ===== BÀI 16: Kiểm tra số =====
function checkNumber(n) {
    if (n > 0) return "positive";
    if (n < 0) return "negative";
    return "zero";
}

// ===== BÀI 17: Swap =====
function swap(a, b) {
    return [b, a];
}

// ===== BÀI 18: Random trong range =====
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===== BÀI 19: Sum rest params =====
function sumRest(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

// ===== BÀI 20: Giai thừa đệ quy =====
function factorialRecursive(n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}

// ===== BÀI 21: Array rỗng =====
function isEmpty(arr) {
    return arr.length === 0;
}

// ===== BÀI 22: Merge arrays =====
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// ===== BÀI 23: Flatten =====
function flatten(arr) {
    return arr.flat();
    // Hoặc: return [].concat(...arr);
}

// ===== BÀI 24: Clone =====
function cloneArray(arr) {
    return [...arr];
}

function cloneObject(obj) {
    return { ...obj };
}

// ===== BÀI 29: Earliest date =====
function findEarliestDate(dates) {
    return new Date(Math.min(...dates.map(d => d.getTime())));
}

// ===== BÀI 30: Longest string =====
function findLongestString(arr) {
    return arr.reduce((longest, current) => 
        current.length > longest.length ? current : longest, '');
}

// ===== BÀI 31: Filter số lẻ =====
function filterOdd(arr) {
    return arr.filter(n => n % 2 !== 0);
}

// ===== BÀI 32: Double array =====
function doubleArray(arr) {
    return arr.map(n => n * 2);
}

// ===== BÀI 33: Sum với reduce =====
function sumWithReduce(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// ===== BÀI 34: Find by ID =====
function findById(arr, id) {
    return arr.find(item => item.id === id);
}

// ===== BÀI 35: Some / Every =====
function hasNegative(arr) {
    return arr.some(n => n < 0);
}

function allPositive(arr) {
    return arr.every(n => n > 0);
}

// ===== BÀI 36: Sort =====
function sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
}

function sortDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

// ===== BÀI 37: Capitalize =====
function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== BÀI 38: Split words =====
function splitWords(sentence) {
    return sentence.split(' ');
}

// ===== BÀI 39: Join words =====
function joinWords(arr) {
    return arr.join(' ');
}

// ===== MINI PROJECT: Calculator =====
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b === 0 ? "Cannot divide by zero" : a / b,
    modulo: (a, b) => a % b,
    power: (a, b) => a ** b,
    
    calculate(a, operator, b) {
        switch (operator) {
            case '+': return this.add(a, b);
            case '-': return this.subtract(a, b);
            case '*': return this.multiply(a, b);
            case '/': return this.divide(a, b);
            case '%': return this.modulo(a, b);
            case '**': return this.power(a, b);
            default: return "Invalid operator";
        }
    }
};

// ===== TEST ALL =====
console.log("========================================");
console.log("        KIỂM TRA ĐÁP ÁN               ");
console.log("========================================");

console.log("\n--- Bài 1-5 ---");
console.log("sum(3, 5):", sum(3, 5));
console.log("isEven(4):", isEven(4));
console.log("factorial(5):", factorial(5));
console.log("isPalindrome('level'):", isPalindrome('level'));
console.log("reverseString('hello'):", reverseString('hello'));

console.log("\n--- Bài 6-10 ---");
console.log("findMax([4, 7, 1, 9]):", findMax([4, 7, 1, 9]));
console.log("average([5,10,15,20]):", average([5,10,15,20]));
console.log("removeDuplicates([1,2,2,3]):", removeDuplicates([1,2,2,3]));
console.log("isPrime(17):", isPrime(17));
console.log("power(2, 3):", power(2, 3));

console.log("\n--- Calculator ---");
console.log("10 + 5 =", calculator.calculate(10, '+', 5));
console.log("10 / 0 =", calculator.calculate(10, '/', 0));
console.log("2 ** 10 =", calculator.calculate(2, '**', 10));
