function operate_relat(a, b) {

    document.write("a = " + a);
    document.write("<br>b = " + b);

    document.write("<br> <br>");

    document.write("a > b " + (a < b));
    document.write("<br>a < b " + (a > b));
    document.write("<br>a == b " + (a == b));
    document.write("<br>a != b " + (a != b));
    document.write("<br>a >= b " + (a >= b));
    document.write("<br>a <= b " + (a <= b));
}

function operate_logical(a, b, c) {

    document.write("a = " + a);
    document.write("<br>b = " + b);
    document.write("<br>c = " + c);

    document.write("<br> <br>");

    document.write(" (a == b ) && ( c > b ) = " + ((a == b) && (c > b)));
    document.write("<br> (a == b ) || ( c > b ) = " + ((a == b) || (c > b)));
    document.write("<br> (a != b ) || ( c < b )  = " + ((a != b) || (c < b)));
    document.write("<br> !(a == b )  = " + (!(a == b)));

}

function operate_bitwise(a, b) {

    document.write("a = " + a);
    document.write("<br>b = " + b);

    document.write("<br> <br>");

    document.write("a & b = " + (a & b));
    document.write("<br>a | b = " + (a | b));
    document.write("<br>a ^ b = " + (a ^ b));
    document.write("<br>~a = " + (~a));
    document.write("<br>~b = " + (~b));
    document.write("<br>a << 2 = " + (a << 2));
    document.write("<br>a >> 2 = " + (a >> 2));
    document.write("<br>a >>> 2 = " + (a >>> 2));

}

function operate_ternary(a, b) {

    document.write("a = " + (a > b ? a : b));
    document.write("<br>b = " + (a > b ? b : a));

    max = (a < b ? b : a);
    ans = (a > b) ? (a - b) : (b - a);
    document.write("<br>max = " + max);
    document.write("<br>ans = " + ans);
}

function back() {

    const button = document.createElement("button");
    button.innerHTML = "Return to Main Page";
    button.onclick = function () {
        window.location.href = "../operators/oper.html";
    }
    document.body.appendChild(button);

}

function eli(age) {
    if (age >= 18) {
        document.write("You are eligible to vote");
    }
    else {
        document.write("You are not eligible to vote");
    }
}

function grade(marks) {
    if (marks >= 80) {
        document.write("Grade A");
    }
    else if (marks >= 60) {
        document.write("Grade B");
    }
    else if (marks >= 40) {
        document.write("Grade C");
    }
    else if (marks >= 20) {
        document.write("Grade D");
    }
    else {
        document.write("Grade F");
    }
}

function grade_switch(marks) {
    switch (true) {
        case (marks >= 80):
            document.write("Grade A");
            break;
        case (marks >= 60):
            document.write("Grade B");
            break;
        case (marks >= 40):
            document.write("Grade C");
            break;
        case (marks >= 20):
            document.write("Grade D");
            break;
        default:
            document.write("Grade F");
    }
}