// Создаю стрелочную функцию
const calculateTotalPrice = (quantity, price) => quantity * price;
const resultPrice = calculateTotalPrice(2, 150000);
console.log(resultPrice);
// Отображаю и вызываю разделитель чисел
console.log(resultPrice.toLocaleString("ru-Ru"));
// Создаю функцию для кнопки и с помощью id вывод строки с суммой
let showTheMessage;
function showThePrice() {
  showTheMessage = resultPrice;
  document.getElementById(
    "myButton"
  ).innerHTML = `Стоимость выбранных изделий: ${resultPrice} рублей`;
}
