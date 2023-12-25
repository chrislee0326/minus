var f, s, result;
function make() {
    var a = Math.floor(Math.random() * (20 - 10)) + 10; // a 는 10 이상 20 미만의 정수
    var b;
    do {
        b = Math.floor(Math.random() * 10); // b 는 0 이상 10 미만의 정수
                
    } while (!(a - 10 < b)); // a - 10 < b 조건을 만족할 때까지 반복
    f = a;
    s = b;
    result = f - s;
    document.getElementById("output").innerHTML = a + "-" + b + "=" ;
}
function output() {
    document.getElementById("output").innerHTML = result;
}
