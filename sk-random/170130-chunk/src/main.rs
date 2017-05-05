fn main() {
    chunk(vec![1, 2, 3], 0);
}

fn chunk(array: Vec<i32>, size: i32) {
    for mut item in array {
        item += 1;
        println!("item {}", item);
    }
    println!("size {}", size);
}
