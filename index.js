import "./style.css";
import { App } from "./app";

const app = new App();

app.start();

const hourArrow = document.querySelector(".arrow--hour");
// const minArrow = document.querySelector(".arrow--min");
// const secArrow = document.querySelector(".arrow--sec");

setInterval(() => {
  const date = new Date();

  const hour = date.getHours();
  hourArrow.style.transform = `rotate(${hour * 30}deg)`;

  // const min = date.getMinutes();
  // minArrow.style.transform = `rotate(${min * 6}deg)`;

  // const sec = date.getSeconds();
  // secArrow.style.transform = `rotate(${sec * 6}deg)`;
});
