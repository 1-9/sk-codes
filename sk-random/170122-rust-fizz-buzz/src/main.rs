fn main() {
    println!("Hello, world!");

    for i in 0..100 {
        if i % 5 == 0 && i % 3 == 0 {
            println!("fizz buzz {}", i);
        } else if i % 3 == 0 {
            println!("fizz {}", i);
        } else if i % 5 == 0 {
            println!("buzz {}", i);
        }
    }
}
