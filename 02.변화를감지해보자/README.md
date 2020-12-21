# observer 디자인 패턴

## MutationObserver()

new MutationObserver(function callback);

개발자들에게 DOM 변경 감시를 제공합니다
DOM 변경 감시자의 인스턴스화에 대한 생성자

callback 함수는 DOM 변경시 마다 호출된다.

## observe()

void observe(Node target,MutationObserverInit options);

target DOM 변경을 감시할 Node.
options DOM 변경이 보고되어야 할 특정 MutationObserverInit 객체.

감시자 observer는 두 인자와 함께 이 함수를 호출한다
첫째 인자는 오브젝트들의 배열이며, 오브젝트의 각 형식은 MutationRecord 입니다. 

둘째 인자는 이 MutationObserver 인스턴
