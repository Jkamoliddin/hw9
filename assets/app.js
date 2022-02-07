let Pi = 3.1415926536;
let calculator = (a, b, oper) =>
    oper == "+"
    ? a + b
    : oper == "-"
    ? a - b
    : oper == "/"
    ? a / b
    : oper == "*"
    ? a * b
    : oper == "**"
    ? a ** b
    : oper == "Pi"
    ? a*Pi* b
    : oper == "%"
    ? a % b
    : console.log("WTF");

console.log(
  calculator(
    +prompt("Введите первое число!"),
    +prompt("Введите второе число!"),
    prompt("Введите умножение, деление, минус, плюс, пи и проценты!")
  )
);