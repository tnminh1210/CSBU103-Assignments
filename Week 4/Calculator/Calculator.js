const display = document.getElementById('display');
// function lấy giá trị thành giá trị hiển thị, xóa ký tự cuối hoặc thêm ký tự vào hiển thị
function appendToDisplay(input) {
    if (input === 'delete') {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += input;
    }
}
// function xóa toàn bộ giá trị hiển thị
function clearDisplay() {
    display.value = "";
}

//function tính toán giá trị hiển thị và hiển thị kết quả
function calculate() {
    // tạo phương thức tính toán
    try {
        // lấy biểu thức từ hiển thị
        let expression = display.value;
        // thay thế các ký tự toán học bằng các ký tự tương ứng trong JavaScript
        expression = expression.replace(/÷/g, '/');
        expression = expression.replace(/×/g, '*');
        expression = expression.replace(/%/g, '/100');
        // đánh giá biểu thức và hiển thị kết quả
        display.value = eval(expression);
        // bắt lỗi nếu biểu thức không hợp lệ
    } catch (error) {
        display.value = "Error";
    }
}