const BASE_CLASS = "arrow";

export const arrowTypes = {
  min: "min",
  sec: "sec",
  hour: "hour",
};

const typeToCssModifier = {
  [arrowTypes.min]: `${BASE_CLASS}--min`,
  [arrowTypes.sec]: `${BASE_CLASS}--sec`,
  [arrowTypes.hour]: `${BASE_CLASS}--hour`,
};

class Arrow {
  #createArrow(type) {
    const element = document.createElement("div");
    const cssModifier = typeToCssModifier[type];
    element.classList.add(BASE_CLASS, cssModifier);

    return element;
  }

  getArrow(type) {
    const arrowType = arrowTypes[type];

    if (!arrowType) {
      throw Error(`unknown type: ${type}`);
    }

    return this.#createArrow(arrowType);
  }
}

export const ArrowFactory = new Arrow();
