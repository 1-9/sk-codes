fn main() {
    let mut b = 9;
    b = plus_one(b);
    println!("b value {}", b);

    let tup = (4, 5.0, false, 'h');
    println!("tup value is {}", tup.3);

    let x = (true, 29);

    match x {
        (x, y) if (x == false || true) && (y > 20 || y < 28) => println!("got a match"),
        (_, _) => {
            println!("nothing to display");
        }
    }

    for (index, value) in (0..10).enumerate() {
        println!("i is {} v is {}", index, value);
    }

    let y = 10;

    let z = if y <= 10 { 2 } else { 5 };

    println!("z value {}", z);

}

fn plus_one(num: i32) -> i32 {
    return num + 1;
}
