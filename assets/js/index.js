//exercice3
const userName = prompt("Введіть ваше ім'я:");
const heading = document.createElement("h1");
heading.textContent = `Вітаю, ${userName}!`;
document.body.append(heading);