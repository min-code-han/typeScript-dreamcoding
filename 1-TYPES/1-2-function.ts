{
//    JavaScript
    function jsAdd(num1, num2){
        return num1 + num2;
    }

//    TypeScript
    function add(num1: number, num2:number): number {
        return num1 + num2
    }


//    JavaScript
    function jsFetchNum (id){
        // code...
        // code...
        // code...
        return new  Promise((resolve, reject) => {
            resolve(100);
        });
    }


    function fetchNum (id: string): Promise<number>{
        // code...
        // code...
        // code...
        return new  Promise((resolve, reject) => {
            resolve(100);
        });
    }

//    JavaScript => TypeScript ✨
//    Optional Parameter

    function printName (firstName: string, lastName?: string){
        console.log(firstName)
        console.log(lastName)
    }
    printName('Mina')
    printName('Mina', undefined )


}
