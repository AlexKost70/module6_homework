function checkArray() {
    let arr = [1, 5, 8, true, "2", "text", 27, NaN, null, {}, [1, 5, 8], 0];

    let even = 0;
    let odd = 0;
    let zero = 0;
    arr.forEach(element => {
        if (typeof(element) === "number") {
            if (element === 0) {
                zero++;
            } else if (element % 2 == 0) {
                even++;
            } else if (isNaN(element)) 
            {} else {
                odd++;
            }
        }
    });
    console.log(`В массиве ${even} четных, ${odd} нечетных и ${zero} чисел с нулевым значением`);
}

checkArray();