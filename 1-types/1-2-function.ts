{
  // // JavaScript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }
  // // TypeScript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // //JavaScript
  // function jsFetchNum(id) {
  //   // code...
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  // //TypeScript
  // function FetchNum(id: string): Promise<number> {
  //   // code...
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript + TypeScript

  //Optional Parameter
  //lastName?: string => string 타입을 전달해도 되고, undefined을 전달해도 된다.
  // 전달하지 아노으면 undefined가 될수 있지만
  function PrintName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  PrintName('Steve', 'John');
  PrintName('mina');
  PrintName('hoon', undefined);

  // Default Parameter
  // 전달하지  않으면 기본 설정값이 들어감
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  //Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8));
}
