export function uniteUnique(...array) {
    let arr = [];
    array.forEach(arg => {
        arr.push(arg)
    })
    arr = arr.flat();
    arr = [...new Set(arr)]

    return arr
}
