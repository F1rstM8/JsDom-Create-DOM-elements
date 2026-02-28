//EXERCICE1

const section = document.createElement("section");
section.id="root";
section.textContent = "Text for example work";
section.style.color="green";
document.body.append(section);  
//exercice2
const purpleElement = document.querySelector("div");
  purpleElement.style.backgroundColor = "purple";
  purpleElement.style.color = "white";
 

//exercice3
const userName = prompt("Введіть ваше ім'я:");
if (userName !== null && userName.trim() !== "") {
  const heading = document.createElement("h1");
  heading.textContent = `Вітаю, ${userName.trim()}!`;
  document.body.append(heading);
} else {
  console.warn("Користувач не ввів ім'я");
}