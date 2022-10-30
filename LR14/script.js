// Task 1
document.write("<h2>Task 1</h2>");
document.write("<p>Умова: Створити об’єкт Date на дату: 20 лютого 2021, 3:12 ранку. Часовий пояс є місцевим. Вивести дату у документ.</p>");
document.write("<p>Результат:</p>");
document.write(new Date(2021, 2, 20, 3, 12));

// Task 2
const getWeekDay = (date) => {
  return new Date(date)
    .toLocaleDateString("uk-UK", { weekday: "short" })
    .toUpperCase();
};

let date2 = new Date(2012, 0, 3);

document.write("<h2>Task 2</h2>");
document.write("<p>Умова: Напишіть функцію getWeekDay(date), щоб показати робочий день у короткому форматі: ‘ПН’, ‘ВТ’, ‘СР’, ‘ЧТ’, ‘ПТ’, ‘СБ’, ‘НД’.</p>");
document.write("<p>Результат:</p>");
document.write("Для приклада взято дату 2012:01:03: " + getWeekDay(date2));

// Task 3

document.write("<h2>Task 3</h2>");
document.write("<p>Умова: Напишіть функцію getLastDayOfMonth(year, month), що повертає останній день місяця. Іноді це 30-е, 31-ше або 28/29-е для лютого.</p>");
document.write("<p>Результат:</p>");

const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);

  return date.getDate();
};
document.write("Для приклада взято лютий 2020-го: " +"Останній день місяця - " + getLastDayOfMonth(2020, 1));

// Task 4

document.write("<h2>Task 4</h2>");
document.write("<p>Умова: Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.</p>");
document.write("<p>Результат:</p>");

const getSecondsToTomorrow = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0);
  document.write("До завтра залишилось " + (tomorrow - Date.now()) / 1000 + " секунд");
};
getSecondsToTomorrow();

// Task 5

document.write("<h2>Task 5</h2>");
document.write("<p>Умова: Напишіть функцію formatDate(date), яка повинна форматувати date наступним чином: </p> <p> - Якщо з date пройшла менше, ніж 1 секунда, то вивести 'прямо зараз'.</p><p> - Інакше, якщо з date пройшло менше 1 хвилини, то 'n сек. назад'.</p><p> - Інакше, якщо менше години, то 'm хв. назад'.</p><p> - В іншому випадку повна дата у форматі 'DD.MM.YY HH:mm'. Тобто: 'день.місяць.рік години:хвилини', все в 2-значному форматі, наприклад, 31.12.21 10:00.</p>");
document.write("<p>Результат:</p>");
function formatDateToString(date) {
  const dataParts = date.split(" ");
  let res = dataParts[0].slice(-3).replace(",", "");

  return `${dataParts[0].slice(0, 5)}.${res} ${dataParts[1].slice(0, 5)}`;
}

const formatDate = (date) => {
  const diff = new Date() - date;
  if (diff < 1000) return "Прямо зараз";
  else if (diff < 60000) return Math.floor(diff / 1000) + " секунд назад";
  else if (diff < 3600000) return Math.floor(diff / 60000) + " хвилин назад";
  else {
    return formatDateToString(date.toLocaleString());
  }
};
document.write(formatDate(new Date(2021, 9, 18, 13, 10)));
