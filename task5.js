const pow = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}
