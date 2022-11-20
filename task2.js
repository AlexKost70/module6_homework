function checkPrime(num) {
    let isPrime = true;

    if (num > 1000) {
        console.log("Данные неверны");
        return;
    } else {
        if (num != 0 && num != 1) {
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        } else {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log("Число является простым");
    } else {
        console.log("Число не является простым");
    }
}

