`use strict`;

const changeCount = (element, field, direction = `plus`) => {
  let number = Number(field.value);

  if (direction === `minus`) {
    if(number > 0) {
      number -= 1;
    }
  } else {
    number += 1;
  }

  field.value = number;
}

const setElementHandlers = (element, ratio) => {
  const countField = element.querySelector(`.stepper-input`);
  const countControls = element.querySelectorAll(`.stepper-arrow`);
  const countUp = countControls[0];
  const countDown = countControls[1];

  const goldPrice = element.querySelector(`.goldPrice`);
  const retailPrice = element.querySelector(`.retailPrice`);
  let goldPriceNumber = Number(goldPrice.textContent);
  let retailPriceNumber = Number(retailPrice.textContent);

  const types = element.querySelectorAll(`.unit--select`);
  const mainType = types[1];
  const altType = types[0];

  const setPrices = () => {
    goldPrice.textContent = `${Number(Number(countField.value) * goldPriceNumber).toFixed(2)}`;
    retailPrice.textContent = `${Number(Number(countField.value) * retailPriceNumber).toFixed(2)}`;
  }

  countUp.addEventListener(`click`, () => {
    changeCount(element, countField);
    setPrices();
  });

  countDown.addEventListener(`click`, () => {
    changeCount(element, countField, `minus`);
    setPrices();
  })

  countField.addEventListener(`change`, () => {
    setPrices();
  });

  mainType.addEventListener(`click`, () => {
    if (!mainType.classList.contains(`unit--active`)) {
      mainType.classList.add(`unit--active`);
      altType.classList.remove(`unit--active`);

      goldPriceNumber = Number(goldPriceNumber / ratio).toFixed(0);
      retailPriceNumber = Number(retailPriceNumber / ratio).toFixed(0);

      setPrices();
    }
  });

  altType.addEventListener(`click`, () => {
    if (!altType.classList.contains(`unit--active`)) {
      altType.classList.add(`unit--active`);
      mainType.classList.remove(`unit--active`);

      goldPriceNumber = Number(goldPriceNumber * ratio).toFixed(2);
      retailPriceNumber = Number(retailPriceNumber * ratio).toFixed(2);

      setPrices();
    }
  });
}

export {setElementHandlers};
