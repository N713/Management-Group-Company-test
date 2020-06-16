`use strict`;

import {utils} from "./utils";

const cardsContainer = document.body.querySelector(`.product__area`);

const getErrorTemplate = (error) => {
  return `<h2><span style="color: red">Ошибка:</span> ${error}</h2>`;
}

const renderError = (message) => {
  utils.render(cardsContainer, utils.makeElement(getErrorTemplate(message)), utils.Position.AFTERBEGIN);
}

export {renderError}
