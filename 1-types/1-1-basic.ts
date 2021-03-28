{
  /*
 JavaScript
 Primitive : number, string, boolean, bigint, symbol, null, undefined
 Object: function, array ....
*/

  // number
  const num: number = 0;

  // string
  const str: string = 'hello';

  // bollean
  const boal: boolean = false;

  // undefined => 값이 있는지 없는지 정의되지 않은 상태
  // age 는 숫자일 수도 있고, undefined 일 수도 있어.
  let age: number | undefined;
  age = undefined;
  age = 20;

  // 찾았다면, number를 리턴하고, 찾지 못했다면 undefined를 리턴함.
  function find(): number | undefined {
    return undefined;
  }

  // null => 확실하게 값이 앖는 상태 (텅텅 빈 상태)  💩
  // 보편적으로 null보다는 undefined를 많이 사용.
  // 문맥에 맞게 사용하면 됨.
  let person: null;
  person = null;
  let person2: string | null;

  // unknown(어떤 데이터타입인지 확실히 모르겠어 !) => 가능하면 쓰지 맙시다. 타입스크립트를 쓰는 이유가 없잖아.  💩
  let notSure: unknown = 0;
  notSure = 'hello';
  notSure = 20;

  //any( 어떤 데이터 타입이던 다 담을수 있어 !)  💩
  let anything: any = 0;
  anything = 'hello';

  // void ( 함수에서 어떤것을 리턴하지 않을때 ,생략가능)
  function print(): void {
    console.log('hello');
    return;
  }

  // never
  function throwError(message: string): never {
    //message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  // Objectlet  💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'mina' });
  acceptSomeObject({ animal: 'dog' });
}
