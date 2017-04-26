fn main() {
    println!("Hello World - {}", halve(40));
    let d = 31;
    match d {
        30 => println!("{}", d),
        _ => println!("{}", "none"),
    }
}
fn halve(arg: i32) -> i32 {
    return arg / 2;
}