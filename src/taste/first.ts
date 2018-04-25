function sayHello(greeting: string): void {
    console.log('sayHello: ' + greeting);
}
// first.ts(4,10): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// sayHello(666);
sayHello('Hello world!');
