
function add() {
    var act = 0, b = 0;
    act = calc.a.value;
    b = act.charAt(act.length - 1);
    if (b == '+' || b == '-' || b == '*' || b == '*') {
        calc.a.value = act.substring(0, act.length - 1);
        calc.a.value += '+';
    }
    else {
        calc.a.value += '+';
    }
}

function sub() {
    var act = 0, b = 0;
    act = calc.a.value;
    b = act.charAt(act.length - 1);
    if (b == '+' || b == '-' || b == '*' || b == '*') {
        calc.a.value = act.substring(0, act.length - 1);
        calc.a.value += '-';
    }
    else {
        calc.a.value += '-';
    }
}

function mul() {
    var act = 0, b = 0;
    act = calc.a.value;
    b = act.charAt(act.length - 1);
    if (b == '+' || b == '-' || b == '*' || b == '*') {
        calc.a.value = act.substring(0, act.length - 1);
        calc.a.value += '*';
    }
    else {
        calc.a.value += '*';
    }
}

function div() {
    var act = 0, b = 0;
    act = calc.a.value;
    b = act.charAt(act.length - 1);
    if (b == '+' || b == '-' || b == '*' || b == '*') {
        calc.a.value = act.substring(0, act.length - 1);
        calc.a.value += '/';
    }
    else {
        calc.a.value += '/';
    }
}
