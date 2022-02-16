const BASE_CLASS = "number";

class ClockNumber {
  #createNumber(value) {
    const element = document.createElement("span");
    element.innerHTML = value;
    element.classList.add(BASE_CLASS);

    return element;
  }

  getNumber(value) {
    return this.#createNumber(value);
  }
}

export const NumberFactory = new ClockNumber();
