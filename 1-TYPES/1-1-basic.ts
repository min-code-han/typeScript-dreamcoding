{
  /**
   * JavaScript
   * Promitive (원시 타입- 한가지의 심플한 타입) : number, string, boolean, bigint(큰 숫자 타입), null, undefined
   * Object: function, array ...
   *  */

  // number
  const num: number = 6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefind
  // - (값이 있는지 없는지 아무것도 결정되지 않은 상태.)- 아직 결정되지 않은 상태
  // 나이가 있으면 number 없으면 undefined 리턴하는 함수. 요런거 할때 많이 쓰임.
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 27;

  const find = (): number | undefined => {
    return undefined;
  };

  // null
  // - (명확하게 값이 없음. 텅텅 비어 있는 상태) - 값이 있거나 없거나.
  let person: null; //💩
  let person2: string | null; //💩

  // unKnown 💩
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hi';
  anything = true;

  // void
  const print = (): void => {
    console.log('RETURN');
    return;
  };

  // never
  const throwError = (msg: string): never => {
    // 아무것도 리턴하지 않는 경우
    // msg -> server ( log를 남기기 위해서 )
    throw new Error(msg);
  };

  // object 💩
  // - (어떤 object든지 다 수용 가능)
  let obj: object;
  const acceptSomeObject = (obj: object) => {
    console.log(obj);
  };

  acceptSomeObject({ name: 'mina', age: 30 });
  acceptSomeObject({ animal: 'cat' });
}
