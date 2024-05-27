function calculate() {
    const expression = document.getElementById("input").value;
    const regex = /^[\d\+\-\*\/\.\\^\(\)\s\√]+$/;
 
    if(expression == "") {
        document.getElementById("result").innerHTML = "Expression empty.";
        return;
    }

    if (!regex.test(expression)) {
        document.getElementById("result").innerHTML = `Invalid expression.`;
        document.getElementById("input").value = "";
        return;
    }

    try {
        const result = evaluateExpression(expression);
        document.getElementById("result").innerHTML = `${expression}<br>=<br>${result}`;
        document.getElementById("input").value = "";
    } catch (error) {
        document.getElementById("result").innerHTML = `Error: ${error.message}`;
    }
}

function evaluateExpression(expression) {
    if(expression.includes('√')) {
    expression = expression.replace(/√/g, 'Math.sqrt(') + ')';
    }
    if(expression.includes('^')) {
    expression = expression.replace(/\^/g, '**');
    }
    const result = eval(expression);
    const roundedResult = Math.round(result * 10 ** 3) / 10 ** 3;
    return result === roundedResult ? `${result}` : `${result}<br>~ ${roundedResult}`;
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