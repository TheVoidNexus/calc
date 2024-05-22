function calculate() {
    const expression = document.getElementById("input").value;
    const regex = /^[\d\+\-\*\/\^\(\)\s\√]+$/;

    if (!regex.test(expression)) {
        document.getElementById("result").innerHTML = `Error: Invalid expression`;
        document.getElementById("input").value = "";
        return;
    }

    try {
        const result = evaluateExpression(expression);
        document.getElementById("result").innerHTML = `${expression} = ${result}`;
        document.getElementById("input").value = "";
    } catch (error) {
        document.getElementById("result").innerHTML = `Error (${expression}): ${error.message}`;
    }
}

function evaluateExpression(expression) {
    const result = eval(expression);
    return result;
}

function addToInput(value) {
    document.getElementById("input").value += value;
    document.getElementById("input").focus();
}

document.getElementById("input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculate();
    }
});