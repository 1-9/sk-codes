fn main() {
    left side is not just a variable but an expression
    let (x, y) = (3, 8);

    ! indicates a macro not a function call
    hello world
    println!("Hello, world!");

    by default bindings are immutable, the following is compile error
    let x = 9;
    x = 7;

    type inference by default, or specify explicityly
    let z = 2;
    let z: i32 = 2;

    use mut for mutable bindings
    let mut x = 4;
    x = 9;

    let a: i32 = 9;
    println!("The value of x is : {}", a);
    {
        let b: i32 = 8;
        println!("b, z are accessible her {}, {}", a, b);
    }

    let num = 99;
    let num = "Hello Rust String";

    println!("num {}", num);

    let y = 9;

    let x = if y % 2 == 0 { y } else { y + 1 };
    println!("Value of x is {}", x);

}
