import { ArrowFactory, arrowTypes } from "../arrow/arrow";

import { NumberFactory } from "../number/number";

const BASE_CLASS = "clockFace";

export class clockFace {
  #availableNumbers = [12, 3, 6, 9];

  #createClockFace() {
    const element = document.createElement("div");
    element.classList.add(BASE_CLASS);

    const arrowWrapper = document.createElement("div");
    arrowWrapper.classList.add("arrowWrapper");
    const { min, sec, hour } = this.arrows;
    arrowWrapper.append(min, sec, hour);

    const numberWrapper = document.createElement("div");
    numberWrapper.classList.add("numberWrapper");

    numberWrapper.append(...this.numbers);

    element.append(arrowWrapper, numberWrapper);

    return element;
  }

  #getArrows() {
    const minArrow = ArrowFactory.getArrow(arrowTypes.min);
    minArrow.classList.add(`${BASE_CLASS}__arrow`);
    const secArrow = ArrowFactory.getArrow(arrowTypes.sec);
    secArrow.classList.add(`${BASE_CLASS}__arrow`);
    const hourArrow = ArrowFactory.getArrow(arrowTypes.hour);
    hourArrow.classList.add(`${BASE_CLASS}__arrow`);

    return {
      min: minArrow,
      sec: secArrow,
      hour: hourArrow,
    };
  }

  #getNumbers(availableNumbers) {
    return availableNumbers.map((numberValue) => {
      const numberElement = NumberFactory.getNumber(numberValue);
      numberElement.classList.add(`${BASE_CLASS}__number--${numberValue}`);

      return numberElement;
    });
  }

  constructor() {
    this.arrows = this.#getArrows();
    this.numbers = this.#getNumbers(this.#availableNumbers);
  }

  getClockFace() {
    return this.#createClockFace();
  }
}
