var result;
var debounceTimer;
function make() {
    if (debounceTimer) {
        clearTimeout(debounceTimer); // 이미 타이머가 설정되어 있다면 초기화
    }
    debounceTimer = setTimeout(function() {
        var a = Math.floor(Math.random() * (20 - 10)) + 10; // a 는 10 이상 20 미만의 정수
        var b;
        do {
            b = Math.floor(Math.random() * 10); // b 는 0 이상 10 미만의 정수
        } while (!(a - 10 < b)); // a - 10 < b 조건을 만족할 때까지 반복
        result = a - b;
        document.getElementById("output").innerHTML = a + "-" + b + "=";
    }, 250); // 250밀리초 동안 추가 호출을 방지
}

function output() {
    document.getElementById("output").innerHTML = result;
}
