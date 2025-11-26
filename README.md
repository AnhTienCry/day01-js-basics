# Ngày 1 - JavaScript Cơ Bản (26/11/2025)

## ✅ HOÀN THÀNH!

---

## 🎯 Mục tiêu đã đạt được:
- ✅ Biết khai báo biến, kiểu dữ liệu, toán tử
- ✅ Viết hàm cơ bản, console log, debug logic
- ✅ Viết được script JS chạy trên Node/Browser
- ✅ Sử dụng các Array Methods (map, filter, reduce, find, some, every)
- ✅ Hiểu và áp dụng Spread Operator, Rest Parameters
- ✅ Debug và fix các lỗi thường gặp

---

## 📚 KIẾN THỨC ĐÃ HỌC

### 1. Kiểu dữ liệu (Data Types)
```javascript
// Primitive Types
let age = 25;              // number
let name = "Nguyen Van A"; // string
let isActive = true;       // boolean
let data = null;           // null (rỗng có chủ đích)
let something;             // undefined (chưa gán giá trị)
```

### 2. Biến (Variables)
```javascript
var oldWay = "old";   // ❌ Hạn chế dùng - phạm vi function, có hoisting
let counter = 0;      // ✅ Phạm vi block, có thể thay đổi
const PI = 3.14159;   // ✅ Phạm vi block, không thể thay đổi
```

### 3. Toán tử (Operators)
```javascript
// Số học: +, -, *, /, %, **
// Gán: =, +=, -=, *=, /=
// So sánh: == (loose), === (strict), !=, !==, >, <, >=, <=
// Logic: &&, ||, !
```

### 4. Control Flow
```javascript
// if/else, switch/case, ternary operator (? :)
let status = age >= 18 ? "Người lớn" : "Trẻ em";
```

### 5. Vòng lặp (Loops)
```javascript
for (let i = 0; i < 5; i++) { }     // for loop
while (condition) { }                // while loop
do { } while (condition);            // do-while loop
for (let item of array) { }          // for...of (duyệt mảng)
```

### 6. Hàm (Functions)
```javascript
// Function declaration
function greet(name) { return "Hello, " + name; }

// Function expression
const add = function(a, b) { return a + b; };

// Arrow function
const multiply = (a, b) => a * b;

// Rest parameters
function sumRest(...args) { return args.reduce((a, b) => a + b, 0); }
```

---

## 🔥 KỸ NĂNG ARRAY METHODS ĐÃ THÀNH THẠO

| Method | Mô tả | Ví dụ |
|--------|-------|-------|
| `map()` | Biến đổi từng phần tử | `arr.map(n => n * 2)` |
| `filter()` | Lọc phần tử theo điều kiện | `arr.filter(n => n % 2 !== 0)` |
| `reduce()` | Gộp thành 1 giá trị | `arr.reduce((acc, val) => acc + val, 0)` |
| `find()` | Tìm phần tử đầu tiên khớp | `arr.find(item => item.id === 1)` |
| `some()` | Kiểm tra có ít nhất 1 phần tử thỏa mãn | `arr.some(n => n < 0)` |
| `every()` | Kiểm tra tất cả phần tử thỏa mãn | `arr.every(n => n > 0)` |
| `sort()` | Sắp xếp mảng | `arr.sort((a, b) => a - b)` |
| `flat()` | Làm phẳng mảng lồng nhau | `[[1,2],[3,4]].flat()` → `[1,2,3,4]` |

---

## 🔧 SPREAD OPERATOR & DESTRUCTURING

```javascript
// Spread operator - trải phần tử
const merged = [...arr1, ...arr2];        // Gộp mảng
const cloned = [...originalArray];         // Clone mảng
const clonedObj = { ...originalObj };      // Clone object
Math.max(...numbers);                      // Truyền vào hàm

// Destructuring
const [a, b] = [1, 2];                     // Array destructuring
const { username, domain } = parseEmail(); // Object destructuring
```

---

## 🐛 DEBUG SKILLS - CÁC LỖI THƯỜNG GẶP

| Loại lỗi | Ví dụ | Cách fix |
|----------|-------|----------|
| **Syntax Error** | Thiếu dấu `}`, `)` | Kiểm tra cặp ngoặc |
| **Infinite Loop** | Thiếu `i++` trong vòng lặp | Thêm biến đếm |
| **Off-by-one** | `i <= arr.length` | Dùng `i < arr.length` |
| **Type Error** | `'100' + '50' = '10050'` | Dùng `Number()` hoặc `parseInt()` |
| **Scope Error** | Biến `var` trong `if` | Dùng `let`/`const`, khai báo ngoài block |

---

## 📝 BÀI TẬP ĐÃ HOÀN THÀNH (40 bài)

### Cơ bản (1-10)
- [x] 01-sum: Tính tổng 2 số
- [x] 02-even-odd: Kiểm tra chẵn/lẻ
- [x] 03-factorial: Tính giai thừa
- [x] 04-palindrome: Kiểm tra chuỗi đối xứng
- [x] 05-reverse-string: Đảo ngược chuỗi
- [x] 06-max-min: Tìm max/min trong mảng
- [x] 07-average: Tính trung bình cộng
- [x] 08-remove-duplicates: Loại bỏ phần tử trùng
- [x] 09-prime: Kiểm tra số nguyên tố
- [x] 10-power: Tính lũy thừa

### String & Number (11-20)
- [x] 11-string-to-array: Chuyển chuỗi thành mảng
- [x] 12-format-money: Format số tiền
- [x] 13-count-chars: Đếm ký tự
- [x] 14-starts-ends-letter: Kiểm tra chữ cái đầu/cuối
- [x] 15-parse-email: Tách email
- [x] 16-check-number: Kiểm tra số dương/âm/zero
- [x] 17-swap: Hoán đổi 2 giá trị
- [x] 18-random-range: Random trong khoảng
- [x] 19-sum-rest: Tổng với rest params
- [x] 20-factorial-recursive: Giai thừa đệ quy

### Array Methods (21-40)
- [x] 21-is-empty: Kiểm tra mảng rỗng
- [x] 22-merge-arrays: Gộp mảng (spread)
- [x] 23-flatten: Làm phẳng mảng
- [x] 24-clone: Clone array/object
- [x] 25-28-debug-basics: Debug cơ bản
- [x] 29-earliest-date: Tìm ngày sớm nhất
- [x] 30-longest-string: Tìm chuỗi dài nhất
- [x] 31-filter-odd: Lọc số lẻ (filter)
- [x] 32-double-array: Nhân đôi mảng (map)
- [x] 33-sum-reduce: Tổng mảng (reduce)
- [x] 34-find-by-id: Tìm theo ID (find)
- [x] 35-some-every: some/every
- [x] 36-sort-array: Sắp xếp mảng
- [x] 37-capitalize: Viết hoa chữ cái đầu
- [x] 38-split-words: Tách từ
- [x] 39-join-words: Nối từ
- [x] 40-debug-all: Debug tổng hợp

---

## 🛠️ MINI PROJECT: Console Calculator ✅

```javascript
// Máy tính với các phép: +, -, *, /, %, **
function calculate(a, operator, b) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? "Cannot divide by zero" : a / b;
        case '%': return a % b;
        case '**': return a ** b;
        default: return "Invalid operator";
    }
}
```

---

## 🐛 DEBUG DRILL ✅

Đã fix 5 bugs trong `debug-drill/bugs-to-fix.js`:
1. ✅ Syntax Error - Thiếu dấu đóng ngoặc
2. ✅ Infinite Loop - Thiếu `n--`
3. ✅ Off-by-one Error - Sai index `i = 1` và `<=`
4. ✅ Type Error - String concatenation → Dùng `Number()`
5. ✅ Scope Error - Biến `var` trong `if` block

---

## 🏃 Cách chạy code

```bash
# Chạy file JavaScript với Node.js
node exercises/01-sum.js

# Chạy debug drill
node debug-drill/bugs-to-fix.js

# Chạy mini project
node mini-project/calculator.js
```

---

## 📈 TIẾN ĐỘ

| Nội dung | Trạng thái |
|----------|------------|
| Lý thuyết cơ bản | ✅ Hoàn thành |
| 40 bài tập | ✅ Hoàn thành |
| Mini Project Calculator | ✅ Hoàn thành |
| Debug Drill (5 bugs) | ✅ Hoàn thành |

---

## 🎉 KẾT LUẬN NGÀY 1

Đã nắm vững nền tảng JavaScript bao gồm:
- Biến, kiểu dữ liệu, toán tử
- Control flow & vòng lặp
- Functions (declaration, expression, arrow)
- Array methods hiện đại (map, filter, reduce, find, some, every)
- Spread operator & destructuring
- Kỹ năng debug cơ bản

**Sẵn sàng cho Day 2! 🚀**
