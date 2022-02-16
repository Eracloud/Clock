import clock from "./components/clock";

export class App {
  start() {
    const clockElement = clock.show();

    document.body.append(clockElement);
  }
}
