//@noUnusedLocals:true

declare var console: { log(a: any): void };

function one() {
    const foo = { a: 1, b: 2 };
    // 'a' is declared but never used
    const {a, ...bar} = foo;
    console.log(bar);
}

function two() {
    const foo = { a: 1, b: 2 };
    // 'blah' is declared but never used
    const {a: blah, ...bar} = foo;
    console.log(bar);
}

function three() {
    const foo = { a: 1, b: 2 };
    // 'a' is declared but never used
    const {a, ...bar} = foo; // bar should be unused
    //console.log(bar);
}

function four() {
    const foo = { a: 1, b: 2 };
    // 'blah' is declared but never used
    const {a: blah, ...bar} = foo; // bar should be unused
    //console.log(bar);
}
