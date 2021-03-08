function revert(text) {
    let result = '';
    for (let i = text.length; i >= 0; i--) {
        result += text.charAt(i-1);
    }
    console.log(result);
}
revert('hello');