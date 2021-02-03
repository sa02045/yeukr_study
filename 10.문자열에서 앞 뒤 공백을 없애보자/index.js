// solution 함수의 string인자로 랜덤한 문자열이 인자로 주어집니다.
// 이 문자열의 시작부분과 끝부분에 스페이스 공백이 존재할수도 있습니다
// "   밥을 먹었니"
// "밥을 먹었니   "
// "   밥을 먹었니   "
//
// 앞혹은 뒤에 공백이 존재한다면 그 공백을 없애서 다음과 같이 바꿔서 리턴해주는 함수를 만들어주세요
// "밥을 먹었니"
//
// 공백은 스페이스뿐 아니라 개행과 탭도 공백으로 취급합니다
// 정규표현식 혹은 trim등을 비롯한 String관련, 그리고 Array관련 자바스크립트 기본 함수들은 사용할 수 없습니다

function solution(string) {
    let answer = "";
    let left = 0;
    let right = string.length - 1;
    while (left < right && (string[left] === " " || string[right] === " ")) {
        if (string[left] === " ") {
            left += 1;
        }
        if (string[right] === " ") right -= 1;
    }

    for (let i = left; i <= right; i++) {
        answer += string[i];
    }
    return answer;
}