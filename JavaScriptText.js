let start=new Date();

function sayHi() {   
    console.log( "Hello" );
  }
  
  let func = sayHi;    // (2) 함수 복사
  
  func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
  sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다
  
//let은 sum함수를 선언하고 매개변수로 a,b를 받는다 
//전달받은 매개변수는 +연산을 수행한다
  let sum=(a,b)=>a+b;
//화살표는 아래 함수의 축약버전
//   let sum=function(a,b){
//       return a+b;
//     };
//(a,b)=>a+b;는 인수 a와 b를 받는 함수이다
//a+b를 평가하고 그 결과를 반환한다
 console.log(sum(1,2));

  let map = new Map();
 
map.set('1', 'str1');   // 문자형 키
map.set(1, 'num1');     // 숫자형 키
map.set(true, 'bool1'); // 불린형 키
 
// 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
// 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
 console.log( map.get(1)   ); // 'num1'
 console.log( map.get('1') ); // 'str1'
 
 console.log( map.size ); // 3

let now = new Date();
console.log( now ); // 현재 날짜 및 시간이 출력됨
console.log("현재년도 "+now.getFullYear())


let end = new Date(); // 측정 종료

console.log( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }

  console.log( pow(2, 3) ); // 8
  
  