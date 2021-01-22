// string 인자로 "🎨🎍🎍🎍🎪🎪👜🎍🎨👜👜🎍" 이러한 문자열이 주어집니다
function solution(string) {
    let answer = "";
    for (let char of string) {
        if (answer.indexOf(char) === -1) answer += char;
    }
    return answer;
}
