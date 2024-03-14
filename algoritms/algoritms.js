// Бинарный поиск
function binary_search(list, item) {
  let low = 0;
  low;
  let high = list.length - 1;
  high;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess == item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else if (guess < item) {
      low = mid + 1;
    }
  }
  return undefined;
}

my_list = [1, 3, 5, 7, 9];
console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, -1)); // return undefined;
