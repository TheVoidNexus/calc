function calculate() {
    let type;

    const n1 = parseFloat(prompt("Enter the first number"));

    if(isNaN(n1)) {
        alert("Invalid input. Please enter a number.");
        return;
    }

    const n2 = parseFloat(prompt("Enter the second number"));

    if (isNaN(n2)) {
        alert("Invalid input. Please enter a number.");
        return;
    }

    const operator = prompt("Enter the operator (+,-,*,/)");

    if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
        let result;
        switch (operator) {
            case "+":
                result = n1 + n2;
                break;
            case "-":
                result = n1 - n2;
                break;
            case "*":
                result = n1 * n2;
                break;
            case "/":
                if (n2 === 0) {
                    alert("Cannot divide by zero.");
                    type = "error";
                }
                result = n1 / n2;
                break;
        }

        const roundedResult = Math.round(result * 1000) / 1000;

        const output = document.getElementById("result");

        if(type != "error") {
            output.innerHTML = `${n1} ${operator} ${n2} = ${roundedResult}`;
        } else {
            output.innerHTML = `${n1} ${operator} ${n2} = Math Error`;;
        }

    } else {
        alert("Invalid operator");
    }
}