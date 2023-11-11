use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    println!("Guess the number!");
    // 生成 1-100的随机数
    let secret_number = rand::thread_rng().gen_range(1..101);
    //循环猜数
    loop {
        //创建一个可变的字符串形变量
        let mut guess = String::new();
        println!("Please input your number");
        // 读取用户输入
        io::stdin().read_line(&mut guess).expect("failed to read line!");
        //将输入的字符串类型数字转化为数字类型 并包含异常输入处理
        let guess:u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Please type a number, you typed {}", guess);
                continue
            },
        };
        println!("You guessed: {}", guess);
        //比较随机数与输入的大小
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
